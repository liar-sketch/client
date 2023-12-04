import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    a{
        text-decoration: none;
        color: inherit;
    }

    *{			
		font-family: 'Goyang';
        box-sizing: border-box;		
		font-weight: 600;
				&::-webkit-scrollbar {
			width: 12px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background: #EEEEEE;
			background-clip: padding-box;
			border: 4px solid transparent;
		}
    }
	body {
		width: 1280px;		
		margin: 0 auto;
		font-family: 'Goyang';
		background-color: var(--color-primary);
	}
	h1{
		font-weight: 600;
		font-size: 36px;
	}
	h2{
		font-weight: 600;
		font-size: 30px;
	}
	h3{
		font-weight: 600;
		font-size: 24px;
	}

   
	/*****************************************************/
	:root {
		--color-primary: #c1e0fd;
		--color-black: #000;
		--color-white: #fff;

		--font-weight-bold: 700;
		--font-weight-semiBold: 600;
		--font-weight-regular: 400;

		--font-size-10: 10px;
		--font-size-12: 12px;
		--font-size-14: 14px;
		--font-size-16: 16px;
		--font-size-18: 18px;
		--font-size-20: 20px;
		--font-size-22: 22px;
		--font-size-24: 24px;
		--font-size-26: 26px;
		--font-size-28: 28px;
		--font-size-30: 30px;
		--font-size-32: 32px;
		--font-size-34: 34px;
		--font-size-36: 36px;
  }
`;

export default GlobalStyles;
