const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptopS: "810px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`, 
  tablet: `(max-width: ${size.tablet})`, 
  laptopS: `(max-width: ${size.laptopS})`,
  laptop: `(max-width: ${size.laptop})`, 
  laptopL: `(max-width: ${size.laptopL})`, 
  desktop: `(max-width: ${size.desktop})`
};
