import React from 'react'

const Goal = ({
  deadline,
  goal,
  nextStep,
  onChange,
}) => (
  <form className='mb3 sm-col-6'>
    <div className='mb2'>
      <label>Goal</label>
      <textarea
        name='goal'
        className='block col-12 field'
        value={goal}
        onChange={onChange}
      />
    </div>
    <div className='mb2'>
      <label>Deadline</label>
      <input
        type='text'
        name='deadline'
        className='block col-12 field'
        value={deadline}
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

export default Goal
