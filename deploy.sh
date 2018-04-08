#!/bin/bash
if [ "$TRAVIS_BRANCH" == "release" ]; then
  yarn run deploy
fi
