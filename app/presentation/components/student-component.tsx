
import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {DiConstants, inject} from "../../di/di";
import {IStudentViewModel} from "../viewmodels/student-view.model";


const studentViewModel = inject<IStudentViewModel>(
    DiConstants.STUDENT_VIEW_MODEL
)
const StudentComponent = () => {
    const [studentName, setStudentName] = useState('Untitled');

    const getStudentDataHandler = async () => {
        const student = studentViewModel.get(1);
        setStudentName( await student ?? "undefined");
    };

    return (
        <View>
            <Button title="Get Student Infor" onPress={getStudentDataHandler} />
            <Text>{studentName}</Text>
        </View>
    );
}

export default StudentComponent;
