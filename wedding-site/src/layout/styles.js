

// export const fade = keyframes`
//   from { opacity: 1; }
//   to { opacity: 0; }
// `

// export const FadeIn = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   background: #ffd863;
//   animation: ${fade} 4s normal forwards ease-in-out;
// `

export const Container = {
    'fontFamily': 'Comic Sans MS',
    'fontSize': '16px',
    'textAlign': 'center',
    'width': '100%',
    'height': '100%',
    'position': 'absolute',
    'top': '5vw',
    'left': '0',
}
export const h1 = {
    'padding': '0',
    'margin': '0 0 0.05em 0',
    'fontFamily': 'Comic Sans MS',
    'fontWeight': '400',
    // 'fontSize': 'min(18vw, 10em)',
    'fontSize': 'min(18vw, 10vh)',

    'lineHeight': '0.85em',
    // 'textShadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    'color': 'white',

  }

  export const p = {
    'fontSize': 'min(3.4vw, 2vh)',
    'color': 'white',
    'fontWeight': '600',
  }

export const TopMiddle = {
    'marginTop': '5vw',
    'margin': 'auto',
    'background': '#2d242438',
    'borderRadius': '2em',
    'padding': '2em',
    'display': 'inline-block',
  }

export const BottomLeft = {
    'position': 'absolute',
    'bottom': '5vw',
    'left': '5vw',
    'width': '30ch',
    'maxWidth': '40%'
  }

export const BottomRight = {
    'position': 'absolute',
    'bottom': '6vw',
    'right': '2vw',
    'width': '35ch',
    'maxWidth': '40%',
    'lineHeight': '1em',
    'letterSpacing': '-0.01em',
    'textAlign': 'right',
    'fontSize': 'min(1.6vw, 1.5vh)',
    'color': 'white'
  }

export const TopRight = {
    'position': 'absolute',
    'display': 'flex',
    'flexDirection': 'column',
    'top': '5vw',
    'right': '5vw',
  }

export const LeftMiddle = {
    'position': 'absolute',
    'bottom': '50%',
    'right': '5vw',
    'fontFamily': "'Inter'",
    'fontWeight': '400',
    'lineHeight': '1em',
    'letterSpacing': '-0.01em',
    'fontSize': '12px',
    'transform': 'rotate(90deg) translate3d(50%, 0, 0)',
    'transformOrigin': '100% 50%'
  }
