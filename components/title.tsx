import React, { FunctionComponent } from 'react';

interface Props {
  value: string;
}

const Title: FunctionComponent<Props> = ({ value }) => <h1>{value}</h1>;

export default Title;
