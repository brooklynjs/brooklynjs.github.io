import React from 'react';

import './SpeakerSlot.css';

import {
  speakerSlotName,
  speakerSlotTime
} from '../utils/speakers';

const EmptySpeakerSlot = ({ index }) => {
  const slotName = speakerSlotName(index);

  return (
    <div>
      <li className="ride"></li>

      <li className="speaker">
        <time>{speakerSlotTime(index)}</time>
        <small>Listen to our {slotName} speaker, or better yet</small>
        <div className="empty-speaker">
          <a href="https://github.com/brooklynjs/brooklynjs.github.io/issues/new">
            Be our {slotName} speaker
          </a>
        </div>
      </li>
    </div>
  )
};

const SpeakerSlot = ({ speaker, index }) => {
  if (speaker === null) {
    return (<EmptySpeakerSlot index={index} />)
  }

  return (
    <div>
      <li className="ride"></li>

      <li className="speaker">
        <time>{speakerSlotTime(index)}</time>
        <small>{speaker.title}</small>

        <div>
          <a href={speaker.url}>
            {speaker.name}
          </a>
        </div>
      </li>
    </div>
  )
};

export default SpeakerSlot;