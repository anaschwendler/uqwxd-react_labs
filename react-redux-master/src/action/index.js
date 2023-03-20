const increment = (val) => {
  return {
      type : 'INCREMENT',
      inc : val // val is the value you want to increase the counter by everytime the button is clicked.
  }
}
export default increment;