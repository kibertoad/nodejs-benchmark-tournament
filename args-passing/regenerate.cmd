rem Make sure to run this in Admin account
rem
call npm run install-node
timeout /t 2
call nvm use 10.23.2
timeout /t 2
call npm run benchmark-all
call nvm use 12.20.1
timeout /t 2
call npm run benchmark-all
call nvm use 14.15.4
timeout /t 2
call npm run benchmark-all
call nvm use 15.8.0
timeout /t 2
call npm run benchmark-all
call npm run combine-results
