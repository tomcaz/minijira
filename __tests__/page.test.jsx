import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux';
import IndexPage from '../app/page'
import { makeStore } from '../lib/store'

const renderView = async () => {

  const initialState = { supports: [] };
  let store;
  store = makeStore(initialState);
  let view
  await act(async () => {
    view = render(
      <Provider store={store}>
        <IndexPage />
      </Provider>
    );

  });

  return { store, view }
}

const clickSubmitButton = async (view) => {
  const submitButton = await view.findByText('Submit')
  await act(async () =>
    await submitButton.click()
  )
}

describe('Testing Validation', () => {

  it('Shows Error After Click without key in information', async () => {
    const { view } = await renderView()
    clickSubmitButton(view)
    await waitFor(() => {
      expect(view.getByText('Full name must be present.')).not.toBeNull();
      expect(view.getByText('Email Address must be a valid address.')).not.toBeNull();
      expect(view.getByText('At least One Tag must be present.')).not.toBeNull();
    })
  });

  it('Should change validation of full name length after key in', async () => {
    const { view } = await renderView()
    clickSubmitButton(view)
    const fullname = await view.getByPlaceholderText('John Doe')
    await act(async () =>
      await fireEvent.change(fullname, { target: { value: 'Zaw' } })
    )
    await waitFor(() => {
      expect(view.getByText('Full name required minimum length of 8.')).not.toBeNull();
    })
  });


  it('tag should not have issue after check one', async () => {
    const { view } = await renderView()
    clickSubmitButton(view)
    const tag = await view.getAllByRole('checkbox', { value: 'UI' })[0]
    fireEvent.click(tag)
    expect(
      view.queryByText('At least One Tag must be present.')).not.toBeInTheDocument();
  });
});

