import React, { useRef } from "react";
import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
import { Shapes } from '../Helpers/Shapes';


const ShapesCanvas = ({ shapes, onUpdate }) => {


    const stageRef = useRef(null);


    const handleDragEnd = (shape) => {
        const attrs = shape.attrs;

        if (onUpdate) {
            onUpdate(attrs);
        }
    }


    const getShapeComponent = (shapeData, index) => {
        switch (shapeData.type) {

            case Shapes.types.CIRCLE:
                return <Circle key={index} {...shapeData} draggable onDragEnd={(e) => handleDragEnd(e.target)} />;

            case Shapes.types.RECTANGLE:
                return <Rect key={index} {...shapeData} draggable onDragEnd={(e) => handleDragEnd(e.target)} />
            case Shapes.types.TRIANGLE:
                return <RegularPolygon key={index} {...shapeData} draggable onDragEnd={(e) => handleDragEnd(e.target)} />

            default: return null;
        }
    }



    return <Stage width={900} height={600} ref={stageRef} className='stage'>
        <Layer>
            {shapes.map((shapeData, index) => getShapeComponent(shapeData, index))}
        </Layer>
    </Stage>

};


export default ShapesCanvas;