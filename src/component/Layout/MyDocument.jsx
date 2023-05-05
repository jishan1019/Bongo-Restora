import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 10,
    },
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Bongo Restora Blog</Text>
                <Text style={styles.subtitle}>Question 1:</Text>
                <Text style={styles.paragraph}>
                    Tell us the differences between uncontrolled and controlled components.
                </Text>
                <Text style={styles.paragraph}>
                    Controlled components refer to components that have their state and behavior controlled by
                    the parent component. Uncontrolled components refer to components that manage their own
                    state internally.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Question 2:</Text>
                <Text style={styles.paragraph}>
                    How to validate React props using PropTypes?
                </Text>
                <Text style={styles.paragraph}>
                    To validate React component props using PropTypes, import PropTypes, define propTypes object, and set its properties to expected prop types.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Question 3:</Text>
                <Text style={styles.paragraph}>
                    Tell us the difference between nodejs and express js
                </Text>
                <Text style={styles.paragraph}>
                    NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Question 4:</Text>
                <Text style={styles.paragraph}>
                    What is a custom hook, and why will you create a custom hook?
                </Text>
                <Text style={styles.paragraph}>
                    Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.
                </Text>
            </View>
        </Page>
    </Document>
);

export default MyDocument;
