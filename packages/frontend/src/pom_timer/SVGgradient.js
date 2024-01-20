import { CircularProgressbar } from 'react-circular-progressbar'

class GradientSVG extends CircularProgressbar {
    render() {
      const { startColor, endColor, gradientId, rotation } = this.props;
  
      const gradientTransform = `rotate(${rotation})`;
  
      return (
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id={gradientId} gradientTransform={gradientTransform}>
              <stop offset="0%" stopColor={startColor} />
              <stop offset="100%" stopColor={endColor} />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  }
  
  export default GradientSVG;
  