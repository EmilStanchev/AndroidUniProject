import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

const EditProfileModal = ({ visible, onClose, onSave, currentDisplayName }) => {
  const [newDisplayName, setNewDisplayName] = useState(currentDisplayName);

  const handleSave = async () => {
    try {
      await updateProfile(auth.currentUser, { displayName: newDisplayName });
      onSave(newDisplayName);
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Edit Name</Text>
          <TextInput
            style={styles.modalInput}
            value={newDisplayName}
            onChangeText={setNewDisplayName}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.cancelButtonText} onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  cancelButtonText: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
    backgroundColor: "gray",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default EditProfileModal;
