import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author='Talles Marques'
            date='05/07/2020'
            content='Finalmente terminei!'
          />
        ))}

        <ChannelMessage
          author='Talles Marques'
          date='05/07/2020'
          content='Finalmente terminei!'
        />

        <ChannelMessage
          author='Lucas Marques'
          date='05/07/2020'
          content={
            <>
              <Mention>@Talles Marques</Mention> Eu também.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
