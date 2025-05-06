/**
 * Vite + React + TypeScript 라이브러리 빌드 설정 파일
 *
 * 이 설정 파일은 React/TypeScript 라이브러리 개발을 위한 것입니다.
 * '라이브러리 모드'로 설정되어 있어 index.html 없이
 * 다른 프로젝트에서 import 가능한 라이브러리 코드를 생성합니다.
 */

import { defineConfig } from "vite";
// Vite 설정을 정의하기 위한 핵심 함수를 가져옵니다.

import react from "@vitejs/plugin-react-swc";
// React 컴포넌트(.jsx/.tsx)를 JavaScript로 변환하는 플러그인입니다.
// SWC(Speedy Web Compiler)를 사용하여 Babel보다 빠른 변환을 제공합니다.
// 이 플러그인이 TSX -> JSX -> JS 변환 과정을 모두 처리합니다.

import dts from "vite-plugin-dts";
// TypeScript 타입 정의 파일(.d.ts)을 생성하는 플러그인입니다.
// 이 플러그인은 타입 정보만 추출하여 d.ts 파일을 생성합니다.

import * as path from "path";
// 파일 경로를 다루기 위한 Node.js의 내장 모듈입니다.

export default defineConfig({
  plugins: [
    react(),
    // JSX/TSX → JS 변환을 처리합니다. React 컴포넌트 개발에 필수적입니다.
    // tsconfig.json의 "emitDeclarationOnly": true 설정에 관계없이
    // react 플러그인이 JavaScript 코드 생성을 담당합니다.

    dts({
      tsconfigPath: "./tsconfig.build.json",
      // 타입 정의 파일 생성에 사용할 TypeScript 설정 파일 경로를 지정합니다.
      // 기본 tsconfig.json과 별도로 빌드용 설정을 분리할 수 있습니다.

      insertTypesEntry: true,
      // 타입 진입점 파일을 자동으로 생성합니다.
      // package.json의 types 필드 또는 기본값(outDir/index.d.ts)을 사용합니다.
      // 이 옵션은 타입 시스템 설정을 자동화하여 개발자 경험을 향상시킵니다.
      // TypeScript 라이브러리를 배포할 때 사용자가 쉽게 타입을 가져올 수 있도록 합니다.
    }),
  ],

  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      // CSS 모듈의 클래스 이름 생성 패턴을 정의합니다.
      // [name]: 파일 이름, [local]: 원래 클래스 이름, [hash:base64:5]: 5자리 해시
      // 이렇게 하면 클래스 이름 충돌을 방지할 수 있습니다.
    },
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    // 경로 별칭을 설정합니다. '@/'로 시작하는 import는 'src/' 디렉토리로 변환됩니다.
    // 예: import Button from '@/components/Button' → import Button from 'src/components/Button'
  },

  build: {
    lib: {
      // *** 라이브러리 모드 설정 ***
      // 이 설정이 있으면 애플리케이션이 아닌 라이브러리로 빌드됩니다.
      // 라이브러리 모드에서는 index.html이 출력물에 포함되지 않습니다.
      // 대신 지정된 진입점(src/lib/index.ts)에서 시작하여 JavaScript 라이브러리 파일만 생성합니다.

      entry: path.resolve(__dirname, "src/lib/index.ts"),
      // 라이브러리 진입점 파일을 지정합니다. 빌드의 시작점입니다.
      // 애플리케이션 모드에서는 index.html이 진입점이지만,
      // 라이브러리 모드에서는 이 파일이 진입점이 됩니다.

      name: "index",
      // UMD 빌드 시 전역 변수 이름입니다(이 설정에서는 UMD를 사용하지 않지만 필수 필드).

      fileName: "index",
      // 출력 파일 이름 형식을 지정합니다. 결과물은 index.js, index.cjs 등이 됩니다.

      formats: ["es"],
      // 생성할 번들 형식을 지정합니다:
      // - es: ES 모듈 (import/export) - 최신 브라우저와 번들러용
      // - cjs: CommonJS (require/module.exports) - Node.js 환경용
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      // 번들에 포함하지 않고 외부에서 가져올 패키지를 지정합니다.
      // 이렇게 하면 라이브러리 크기가 줄어들고 의존성 중복을 방지할 수 있습니다.
      // 라이브러리 사용자는 자신의 프로젝트에 이미 React를 설치해야 합니다.

      output: {
        globals: { react: "React" },
        // UMD 빌드 시 외부 의존성의 전역 변수 이름을 지정합니다.
        // (이 설정에서는 UMD를 사용하지 않지만 포함되어 있습니다)
      },

      plugins: [
        {
          name: "css-import-injector",
          // 사용자 정의 Rollup 플러그인 이름입니다.

          generateBundle(options, bundle) {
            Object.keys(bundle).forEach((id) => {
              const chunk = bundle[id];
              // JS 파일에만 적용하되, .cjs 파일은 제외
              if (chunk.type === "chunk" && id.endsWith(".js")) {
                // 관련 CSS 파일 존재 여부 확인
                const cssFileName = id.replace(/\.js$/, ".css");
                if (bundle[cssFileName]) {
                  // JS 파일 시작 부분에 CSS import 구문 추가
                  chunk.code = `import './${cssFileName}';\n${chunk.code}`;
                }
              }
            });
          },
        },
      ],
    },
  },
});

/**
 * 라이브러리 모드 vs 애플리케이션 모드
 *
 * 라이브러리 모드 (현재 설정):
 * - build.lib 옵션이 있습니다
 * - index.html이 빌드 출력물에 포함되지 않습니다
 * - 결과물: index.js, index.cjs, index.d.ts, CSS 파일(있는 경우)
 * - npm 패키지로 배포하기 위한 코드를 생성할 때 적합합니다
 *
 * 애플리케이션 모드:
 * - build.lib 옵션이 없습니다
 * - index.html이 빌드의 진입점이 되어 dist 폴더에 복사됩니다
 * - JavaScript 파일은 해시가 붙은 이름으로 생성됩니다 (예: main-a1b2c3d4.js)
 * - 웹 애플리케이션 배포를 위한 빌드를 생성할 때 사용합니다
 */
