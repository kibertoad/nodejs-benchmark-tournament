rem Make sure to run this in Admin account
rem
call npm run install-node
timeout /t 2
call nvm use 10.24.1
timeout /t 2
call npm run benchmark-all
call nvm use 12.22.12
timeout /t 2
call npm run benchmark-all
call nvm use 14.15.3
timeout /t 2
call npm run benchmark-all
call nvm use 15.5.0
timeout /t 2
call npm run benchmark-all
call npm run combine-results
