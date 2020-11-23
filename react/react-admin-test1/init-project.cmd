call yarn create react-app test-admin

cd test-admin/

call yarn add react-admin ra-data-json-server prop-types ra-data-fakerest recharts

REM xcopy /Y ..\scripts\*.* .\src

call yarn start