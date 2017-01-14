import React from 'react'

const Wager = ({
  amount,
  nextStep,
  onChange,
}) => (
  <form className='mb3 sm-col-6'>
    <div className='mb2'>
      <label>Amount</label>
      <input
        type='text'
        name='amount'
        className='block col-12 field'
        value={amount}
        onChange={onChange}
      />
    </div>
    <button
      type='button'
      className='btn btn-primary'
      onClick={nextStep}
    >
      Continue
    </button>
  </form>
)

export default Wager
