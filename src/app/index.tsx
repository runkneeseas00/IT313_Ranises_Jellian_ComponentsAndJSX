import { ScrollView, StyleSheet, Text, View } from "react-native";
import StudentCard from "../components/StudentCard";

export default function Index() {
  const students = [
    {
      id: "s1",
      name: "Ana Cruz",
      course: "IT313",
      units: 21,
      isFullLoad: true,
    },

    {
      id: "s2",
      name: "Bea Santos",
      course: "IT313",
      units: 15,
      isFullLoad: false,
    },

    {
      id: "s3",
      name: "Cid Ramos",
      course: "IT313",
      units: 18,
      isFullLoad: true,
    },

    {
      id: "s4",
      name: "Dex Alonzo",
      course: "IT313",
      units: 12,
      isFullLoad: false,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Students: {students.length}</Text>

      <ScrollView>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
