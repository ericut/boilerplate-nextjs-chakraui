import { Component } from '../components/Component';
import { MockProvider } from '../context/mock.context';

const IndexPage = () => {
  return (
    <MockProvider>
      <Component text="Boilerplate NextJS with ChakraUI">Eric Frank Li</Component>
    </MockProvider>
  );
};

export default IndexPage;
