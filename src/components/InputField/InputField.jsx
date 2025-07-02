import React from 'react';
import './InputField.scss';

const InputField = ({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder = '',
}) => {
  const isPhone = name === 'phone';

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
  
    // Если вводим код страны, он может быть длиной 1-3 цифры
    if (input.length > 15) input = input.slice(0, 15); // Ограничиваем общую длину
  
    // Форматируем номер с кодом страны и добавляем скобки и дефисы
    const formatted = input
      .replace(/^(\d{1,3})(\d{0,4})(\d{0,3})(\d{0,2})(\d{0,2})$/, '$1 ($2) $3-$4-$5') // Применяем формат с кодом страны
      .replace(/^(\d{1,3})(\d{0,4})(\d{0,3})(\d{0,2})$/, '$1 ($2) $3-$4') // Для номеров с меньшей длиной
      .replace(/^(\d{1,3})(\d{0,4})(\d{0,3})$/, '$1 ($2) $3') // Для ещё более коротких номеров
      .replace(/^(\d{1,3})(\d{0,4})$/, '$1 ($2') // Для ещё более коротких номеров
      .replace(/^(\d{1,3})$/, '$1 '); // Для начальной стадии ввода
  
    // Обновляем состояние
    onChange({ target: { name, value: formatted } });
  };
  

  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>

      {isPhone ? (
        <input
          id={name}
          name={name}
          type="tel"
          required={required}
          value={value}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className="form-input"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input"
        />
      )}
    </div>
  );
};

export default InputField;
