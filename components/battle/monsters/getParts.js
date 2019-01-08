import getUrl from './getUrl';

export default function getParts(array, proportion) {
  const canvas = document.querySelector('canvas');
  return {
    leftLeg: { url: getUrl(array, 'leftLeg'), x: (canvas.width * 0.858) / proportion, y: (canvas.height * 0.857) / proportion },
    rightLeg: { url: getUrl(array, 'rightLeg'), x: (canvas.width * 0.884) / proportion, y: (canvas.height * 0.857) / proportion },
    leftArm: { url: getUrl(array, 'leftArm'), x: (canvas.width * 0.737) / proportion, y: (canvas.height * 0.671) / proportion },
    body: { url: getUrl(array, 'body'), x: (canvas.width * 0.837) / proportion, y: (canvas.height * 0.638) / proportion },
    rightArm: { url: getUrl(array, 'rightArm'), x: (canvas.width * 0.905) / proportion, y: (canvas.height * 0.671) / proportion },
    head: { url: getUrl(array, 'head'), x: (canvas.width * 0.837) / proportion, y: (canvas.height * 0.463) / proportion },
  };
}
