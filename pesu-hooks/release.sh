#!/bin/bash
set -e

VERSION_TYPE=${1:-patch}

pnpm build
npm version $VERSION_TYPE
npm publish