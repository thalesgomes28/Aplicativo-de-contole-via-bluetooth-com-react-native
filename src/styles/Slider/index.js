import fonts from '../fonts'

const sliderStyle = {
  container: {
    width: "90%",
    margin: 56,
    // colocar em linha
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  text: {
    fontSize: fonts.size.regular,
    textAlign: "center", // dentro do próprio container
    width: 30,
    fontWeight: "bold",
    ...fonts.fontFamily
    
    

  },
};
export default sliderStyle;