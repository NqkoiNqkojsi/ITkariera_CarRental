import React from 'react';
import ViewGL from './ViewGL';
import '../../Styles/Three.css';


class Scene extends React.Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        const canvas = this.canvasRef.current;
        this.viewGL = new ViewGL(canvas, this.props.dir);

        // Init any event listeners
        //window.addEventListener('mousemove', this.mouseMove);
        //window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps, prevState) {
        const newValue = this.props.dir;
        this.viewGL.updateValue(newValue);
    }

    componentWillUnmount() {
        // Remove any event listeners
        //window.removeEventListener('mousemove', this.mouseMove);
        //window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event) => {
        //this.viewGL.onMouseMove();
    }

    handleResize = () => {
        //this.viewGL.onWindowResize(window.innerWidth, window.innerHeight);
    };

    render() {
        return (
            <div className="canvasContainer">
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}

export default Scene;