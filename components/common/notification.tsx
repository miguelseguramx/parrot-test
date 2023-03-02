import styled from 'styled-components'
import { MdCheck } from 'react-icons/md'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const NotificationStyled = styled.div`
  max-width: 300px;
  background: var(--gray100);
  padding: 16px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 4px;
  animation: vanish ease-in 1s 12s forwards;
  display: flex;
  gap: .5rem;
  z-index: 2;
  border: 1px solid var(--success);
  &.error-notification {
    border: 1px solid var(--error);
  }
  border-left-width: 8px;
  .message {
    line-height: 24px;
  }
  @keyframes vanish {
    from {
      opacity: 1;
      transform: scale3D(1, 1, 1);
    }
    to {
      opacity: 0;
      transform: scale3D(0.95, 0.95, 0.95);
    }
  }
  @media(min-width: 768px) {
    bottom: 64px;
    right: 82px;
    max-width: 350px;
  }
`

function Notification({
  message, error, dataCy,
} : { message: string, error?: boolean, dataCy: string }) {
  return (
    <NotificationStyled className={error ? 'error-notification' : ''} data-cy={dataCy}>
      {error ? (
        <AiOutlineExclamationCircle size="24px" color="#E74C3C" />
      ) : (
        <MdCheck size="24px" color="#34A853" />
      )}
      <div className="notification">
        <p className="message">{message}</p>
      </div>
    </NotificationStyled>
  )
}

export default Notification
