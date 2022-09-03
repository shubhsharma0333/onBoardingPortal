import React from 'react'

const InputField = ({name, value, label, placeholder, onChange, decor, span}) => {
  return (
    <div className="inputComponent">
        {label && <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>}
        <div className='input'>
            { span && <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                {span}
            </span>}
            <input
                class={decor ? decor : "block border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-full"}
                value={value}
                name={name}
                label={label}
                placeholder={placeholder}
                onChange={onChange}
            />    
        </div>       
    </div>
  )
}

export default InputField;