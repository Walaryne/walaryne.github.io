#!/bin/bash
OLDDIR=$PWD
cp ../cmake-build-webassembly/puzzlesolver.js ../cmake-build-webassembly/puzzlesolver.wasm ~/html/
cd ~/html/
git add -u
git commit
git push
cd $OLDDIR
