@echo off
start cmd.exe @cmd /k "cd C:\ecc-test-node-api\config&pm2 start index.js&pm2 monit"