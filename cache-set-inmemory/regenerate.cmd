rem Make sure to run this in Admin account
rem
call npm run install-node
timeout /t 2
call nvm use 16.20.2
timeout /t 2
call npm run benchmark-all
call nvm use 18.19.0
timeout /t 2
call npm run benchmark-all
call nvm use 20.10.0
timeout /t 2
call npm run benchmark-all
call nvm use 21.5.0
timeout /t 2
call npm run benchmark-all
call npm run combine-results
