interface ButtonProps {
  classStyles: string
  btnName: string
  handleClick: VoidFunction
}

const Button = ({ classStyles, btnName, handleClick }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  )
}

export default Button
