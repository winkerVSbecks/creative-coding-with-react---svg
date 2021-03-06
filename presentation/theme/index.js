import clrs from '../clrs.js';

const defaultColors = {
  white: clrs.white,
  black: clrs.black,
  blue: clrs.blue,
  gray: clrs.gray,
  red: clrs.red,
};

const defaultFonts = {
  primary: `Europa, Brandon Grotesque`,
  secondary: `Europa, Brandon Grotesque`,
  tertiary: 'monospace',
};

function createTheme() {
  const colorArgs = defaultColors;
  const fontArgs = defaultFonts;

  const colors = Object.assign({}, defaultColors, colorArgs);
  const fonts = Object.assign({}, defaultFonts, fontArgs);

  return {
    colors: colors,
    fonts: fonts,
    global: {
      body: {
        background: colors.white,
        fontFamily: fonts.primary,
        fontWeight: "normal",
        fontSize: "2em",
        color: colors.black,
        overflow: "hidden",
        lineHeight: 1.5
      },
      "html, body": {
        height: "100%"
      },
      "*": {
        boxSizing: "border-box"
      }
    },
    fullscreen: {
      fill: colors.blue
    },
    controls: {
      prev: {
        position: "absolute",
        top: "50%",
        left: 20,
        transform: "translateY(-50%)",
        zIndex: 9999,
        background: "none",
        border: "none",
        outline: 0
      },
      prevIcon: {
        fill: colors.gray
      },
      next: {
        position: "absolute",
        top: "50%",
        right: 20,
        transform: "translateY(-50%)",
        zIndex: 9999,
        background: "none",
        border: "none",
        outline: 0
      },
      nextIcon: {
        fill: colors.gray
      }
    },
    progress: {
      pacman: {
        container: {
          position: "absolute",
          bottom: "5px",
          left: "50%",
          transition: "all 1s ease-in-out 0.2s",
          zIndex: 1000
        },
        pacman: {
          position: "absolute",
          transition: "left 0.3s ease-in-out 0.2s",
          width: "20px",
          height: "20px",
          transform: "translate(-5px, -5px)"
        },
        pacmanTop: {
          position: "absolute",
          content: " ",
          width: "20px",
          height: "10px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          background: colors.gray
        },
        pacmanBottom: {
          position: "absolute",
          content: " ",
          width: "20px",
          height: "10px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          background: colors.gray,
          top: "10px"
        },
        point: {
          position: "absolute",
          float: "left",
          background: "transparent",
          width: "10px",
          height: "10px",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: colors.gray,
          borderRadius: "50%",
          transition: "all 0.01s ease-out 0.4s"
        }
      },
      bar: {
        container: {
          position: "absolute",
          height: "10px",
          width: "100%",
          bottom: 0,
          left: 0,
          transition: "all 1s ease-in-out 0.2s",
          zIndex: 1000
        },
        bar: {
          height: "100%",
          background: colors.gray,
          transition: "all 0.3s ease-out"
        }
      },
      number: {
        container: {
          position: "absolute",
          bottom: 10,
          right: 10,
          zIndex: 1000,
          color: colors.gray
        }
      }
    },
    components: {
      blockquote: {
        textAlign: "left",
        position: "relative",
        display: "inline-block",
        margin: 20
      },
      quote: {
        borderLeft: "6px solid " + colors.blue,
        paddingLeft: 40,
        display: "block",
        color: colors.blue,
        fontSize: "4.9rem",
        fontWeight: "bold"
      },
      cite: {
        color: colors.blue,
        display: "block",
        clear: "left",
        fontSize: "2rem",
        marginTop: "1rem"
      },
      content: {
        margin: "0 auto",
        textAlign: "center"
      },
      codePane: {
        pre: {
          margin: "auto",
          fontSize: "0.8rem",
          fontWeight: "normal",
          fontFamily: fonts.tertiary,
          minWidth: "100%",
          maxWidth: 800
        },
        code: {
          textAlign: "left",
          fontWeight: "normal"
        }
      },
      code: {
        color: "black",
        fontSize: "2.66rem",
        fontFamily: fonts.tertiary,
        margin: "0.25rem auto",
        backgroundColor: "rgba(0,0,0,0.15)",
        padding: "0 10px",
        borderRadius: 3
      },
      heading: {
        h1: {
          color: colors.blue,
          fontSize: "7.05rem",
          fontFamily: fonts.primary,
          fontWeight: 700,
          margin: 0,
          zoom: 1
        },
        h2: {
          color: colors.blue,
          fontSize: "5.88rem",
          fontFamily: fonts.primary,
          fontWeight: 700,
          margin: 0
        },
        h3: {
          color: colors.blue,
          fontSize: "4.9rem",
          fontFamily: fonts.secondary,
          fontWeight: 700,
          margin: "0.5rem auto"
        },
        h4: {
          color: colors.blue,
          fontSize: "3.82rem",
          fontFamily: fonts.primary,
          fontWeight: 700,
          margin: "0.5rem auto"
        },
        h5: {
          color: "black",
          fontSize: "3.19rem",
          fontFamily: fonts.primary,
          fontWeight: 700,
          margin: "0.5rem auto"
        },
        h6: {
          color: "black",
          fontSize: "2.66rem",
          fontFamily: fonts.primary,
          fontWeight: 700,
          margin: "0.5rem auto"
        }
      },
      image: {
        display: "block",
        margin: "0.5rem auto"
      },
      link: {
        textDecoration: "none"
      },
      listItem: {
        fontSize: "2.66rem"
      },
      list: {
        textAlign: "left",
        listStylePosition: "inside",
        padding: 0
      },
      s: {
        strikethrough: {}
      },
      text: {
        color: clrs.black,
        fontSize: "2.66rem",
        fontFamily: fonts.primary,
        margin: "0.25rem auto"
      }
    }
  };
};

export default {
  screen: createTheme()
};
