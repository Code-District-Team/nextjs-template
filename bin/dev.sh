#!/bin/bash

# starting dev server

cross-env NODE_OPTIONS='-r @newrelic/next' NODE_OPTIONS='--inspect' next dev