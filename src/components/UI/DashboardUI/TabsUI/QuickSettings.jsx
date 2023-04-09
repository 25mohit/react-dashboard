import React from 'react'

const QuickSettings = () => {
  return (
    <div className='quick_setting_main'>
      <h2>CheckBox</h2>
      <div className="flex_row">
        <div className="checkbox-wrapper-5">
          <div className="check">
            <input id="check-5" type="checkbox" />
            <label for="check-5"></label>
          </div>
        </div>
        <label id='label' htmlFor='check-5'>Show Profile</label>

      </div>

      <div className="flex_row">
        
      <div class="checkbox-wrapper-8">
          <input class="tgl tgl-skewed" id="cb3-8" type="checkbox"/>
          <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb3-8"></label>
        </div>

      </div>

      <div className="flex_row">
        
        
      <div class="checkbox-wrapper-3">
          <input type="checkbox" id="cbx-3" />
          <label for="cbx-3" class="toggle"><span></span></label>
        </div>
        
      </div>
    </div>
  )
}

export default QuickSettings