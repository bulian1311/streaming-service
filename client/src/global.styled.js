import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 1em;
    box-sizing: border-box;
    --bg-color: #201c2b;
    --text-color: #dad8de;
    --primary-color: #944fff;
    --secondary-color: #392e5c;
    
    /* Большие девайсы (большие десктопы, < 1200px) */
    @media (max-width: 1199.98px) { 
      font-size: .9em;
   }
    /* Средние девайсы («таблетки», < 992px)  */
    @media (max-width: 991.98px) { 
      font-size: .7em;
    }
    /* Малые девайсы («ландшафтные», < 768px) */
    @media (max-width: 767.98px) { 
      font-size: .45em;
    }
    /* Экстрамалые девайсы («телефоны», < 576px) */
    @media (max-width: 575.98px) { 
      font-size: .9em;
    }
  }

	body {
    font-family: "Roboto", sans-serif;
    color: var(--text-color);
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
	a {
		text-decoration: none;
		color: black;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
	*,
  ::before,
  ::after {
		box-sizing: inherit;
  }

  input, textarea, button {
    border: none;
    outline: none;
  }

  *::-webkit-scrollbar {
    width: .5rem;
  }

  *::-webkit-scrollbar-track {
    background: var(--bg-color);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    border-radius: 10px;
  }
`;
