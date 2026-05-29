import type { ButtonProps } from '../../types';

// Reusable atomic Button Component designed for the RIMAC design system.
export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  // Base styles shared across all button variants
  const baseStyles = 'font-bold text-center rounded-[40px] transition-all duration-300 tracking-wide cursor-pointer disabled:opacity-50';
  
  // Style mapping for UI thematic variants
  const variants = {
    primary: 'w-full md:w-auto bg-rimac-black text-white text-lg md:text-xl leading-5 md:leading-[24px] py-4.5 md:py-5 px-10 hover:bg-opacity-90 hover:bg-rimac-navy-light',
    secondary: 'border-2 border-rimac-dark text-rimac-dark bg-transparent hover:bg-rimac-dark hover:text-white py-3 px-6',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;