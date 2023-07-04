import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Circle, RegularPolygon } from 'react-konva';
import { Shapes } from '../Helpers/Shapes';
import ShapesCanvas from './ShapesCanvas';


const Test = () => {


    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        console.log(shapes);
    }, [shapes]);

    const generateShape = (type) => {

        let shapeData = null;

        switch (type) {

            case "circle":
                shapeData = {
                    id: Math.random() + '',
                    x: 70,
                    y: 125,
                    radius: 40,
                    fill: '#E77EE7',
                    type: Shapes.types.CIRCLE
                };

                break;

            case "rectangle":
                shapeData = {
                    id: Math.random() + '',
                    x: 40,
                    y: 180,
                    width: 60,
                    height: 120,
                    fill: '#7E7EE7',
                    type: Shapes.types.RECTANGLE
                }

                break;
            case "triangle":
                shapeData = {
                    id: Math.random() + '',
                    x: 65,
                    y: 370,
                    sides: 3,
                    radius: 50,
                    fill: '#B6E77C',
                    type: Shapes.types.TRIANGLE
                }

                break;

            default:
                shapeData = null;

                break;


        }

        setShapes((oldShapes) => {
            return [...oldShapes, shapeData];
        });
    }

    const handleShapeUpdate = (newData) => {

        let currentShapeIndex = shapes.findIndex((s) => s.id === newData.id);

        if (currentShapeIndex !== -1) {
            const currentShape = { ...shapes[currentShapeIndex], ...newData };

            setShapes((oldShapes) => {
                oldShapes[currentShapeIndex] = currentShape;
                return [...oldShapes];
            })
        }


    }


    return <div>

        <button onClick={() => generateShape("circle")}>Circle</button >
        <button onClick={() => generateShape("rectangle")}>Rectangle</button>
        <button onClick={() => generateShape("triangle")}>Triangle</button>

        <ShapesCanvas shapes={shapes} onUpdate={handleShapeUpdate}></ShapesCanvas>

    </div >
}

export default Test;