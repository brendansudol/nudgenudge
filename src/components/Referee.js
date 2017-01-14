import React from 'react'

const Referee = props => {
  const { referee, referee_email, referee_self,
    nextStep, onChange, onCheckbox
  } = props

  return (
    <form className='mb3 sm-col-6'>
      <div className='clearfix mxn1'>
        <div className='sm-col sm-col-6 mb2 px1'>
          <label>Referee name</label>
          <input
            type='text'
            name='referee'
            className='block col-12 field'
            disabled={referee_self}
            value={referee}
            onChange={onChange}
          />
        </div>
        <div className='sm-col sm-col-6 mb2 px1'>
          <label>Referee email address</label>
          <input
            type='email'
            name='referee_email'
            className='block col-12 field'
            disabled={referee_self}
            value={referee_email}
            onChange={onChange}
          />
        </div>
      </div>
      <label className='block col-12 mb2'>
        <input
          type='checkbox'
          name='referee_self'
          checked={referee_self}
          onChange={onCheckbox}
        />
        Or, I'll be my ref. Scout's honor.
      </label>
      <button
        type='button'
        className='btn btn-primary'
        onClick={nextStep}
      >
        Continue
      </button>
    </form>
  )
}

export default Referee
