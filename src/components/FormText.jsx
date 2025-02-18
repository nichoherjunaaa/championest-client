import React from 'react'

const FormText = ({
    type = "text",
    name,
    label,
    defaultValue,
    value,          // tambahkan prop value
    onChange,       // tambahkan prop onChange
    icon,
    useLabel = false,
    onEnter
}) => {
    return (
        <div className="form-control w-full">
            {/* Label (Opsional) */}
            {useLabel && (
                <label className="label">
                    <span className="label-text capitalize">{label}</span>
                </label>
            )}

            {/* Input dengan Icon */}
            <div className="relative mt-5">
                {icon && (
                    <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                        {icon}
                    </span>
                )}
                <textarea className="textarea textarea-bordered text-sm rounded-full w-full pl-10" onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEnter && onEnter(e.target.value);
                    }
                }}
                    value={value}
                    onChange={onChange}
                    type={type}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={label}>

                </textarea>

            </div>
        </div>
    )
}

export default FormText