rem Make sure to run this in Admin account
rem
call npm run install-node
timeout /t 2
call nvm use 18.20.8
timeout /t 2
call npm run benchmark-all
call nvm use 20.19.2
timeout /t 2
call npm run benchmark-all
call nvm use 22.15.1
timeout /t 2
call npm run benchmark-all
call nvm use 24.0.2
timeout /t 2
call npm run benchmark-all
call npm run combine-results
