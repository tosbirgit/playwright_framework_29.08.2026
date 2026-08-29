import {test, expect} from '../Fixtures/pagefixtures';

test('login test with valid credentials', async ({ loginpage,logoutpage,basepage }) => {
  await basepage.goto('https://practicetestautomation.com/practice-test-login/');
  await loginpage.login('student', 'Password123');
  const successMessage = await logoutpage.getSuccessMessage();
  expect(successMessage).toBe('Logged In Successfully');
})



test('login test with invalid username', async ({ loginpage,logoutpage,basepage }) => {
  await basepage.goto('https://practicetestautomation.com/practice-test-login/');
  await loginpage.login('invaliduser', 'Password123');
  const failureMessage = await loginpage.getfailureMessageForUsername();
  expect(failureMessage).toBe('Your username is invalid!');
})


test('login test with invalid password', async ({ loginpage,logoutpage,basepage }) => {
  await basepage.goto('https://practicetestautomation.com/practice-test-login/');
  await loginpage.login('student', 'InvalidPassword');
  const failureMessage = await loginpage.getfailureMessageForPassword();
  expect(failureMessage).toBe('Your password is invalid!');
})

//npx playwright test tests/logintest.spec.ts --headed --project=chromium