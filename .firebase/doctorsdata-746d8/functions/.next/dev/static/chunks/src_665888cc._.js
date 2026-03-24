(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/DataEntryForm/DataEntryForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addressInfo": "DataEntryForm-module__-_tJAq__addressInfo",
  "auditGrid": "DataEntryForm-module__-_tJAq__auditGrid",
  "auditItem": "DataEntryForm-module__-_tJAq__auditItem",
  "auditLabel": "DataEntryForm-module__-_tJAq__auditLabel",
  "auditValue": "DataEntryForm-module__-_tJAq__auditValue",
  "badge": "DataEntryForm-module__-_tJAq__badge",
  "cancelBtn": "DataEntryForm-module__-_tJAq__cancelBtn",
  "checkboxLabel": "DataEntryForm-module__-_tJAq__checkboxLabel",
  "checkboxWrapper": "DataEntryForm-module__-_tJAq__checkboxWrapper",
  "contactInfo": "DataEntryForm-module__-_tJAq__contactInfo",
  "errorMessage": "DataEntryForm-module__-_tJAq__errorMessage",
  "fadeIn": "DataEntryForm-module__-_tJAq__fadeIn",
  "field": "DataEntryForm-module__-_tJAq__field",
  "fieldErrorMessage": "DataEntryForm-module__-_tJAq__fieldErrorMessage",
  "form": "DataEntryForm-module__-_tJAq__form",
  "formHeader": "DataEntryForm-module__-_tJAq__formHeader",
  "formWrapper": "DataEntryForm-module__-_tJAq__formWrapper",
  "headerSeparator": "DataEntryForm-module__-_tJAq__headerSeparator",
  "headerText": "DataEntryForm-module__-_tJAq__headerText",
  "invalid": "DataEntryForm-module__-_tJAq__invalid",
  "invalidCheckbox": "DataEntryForm-module__-_tJAq__invalidCheckbox",
  "logoContainer": "DataEntryForm-module__-_tJAq__logoContainer",
  "modalMode": "DataEntryForm-module__-_tJAq__modalMode",
  "privacySection": "DataEntryForm-module__-_tJAq__privacySection",
  "resetButton": "DataEntryForm-module__-_tJAq__resetButton",
  "row": "DataEntryForm-module__-_tJAq__row",
  "sectionHeader": "DataEntryForm-module__-_tJAq__sectionHeader",
  "shake": "DataEntryForm-module__-_tJAq__shake",
  "slideUp": "DataEntryForm-module__-_tJAq__slideUp",
  "submitBtn": "DataEntryForm-module__-_tJAq__submitBtn",
  "submitRow": "DataEntryForm-module__-_tJAq__submitRow",
  "subtitle": "DataEntryForm-module__-_tJAq__subtitle",
  "successContainer": "DataEntryForm-module__-_tJAq__successContainer",
  "successIcon": "DataEntryForm-module__-_tJAq__successIcon",
});
}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "checkDuplicate",
    ()=>checkDuplicate,
    "db",
    ()=>db,
    "getCollectionData",
    ()=>getCollectionData,
    "saveFormData",
    ()=>saveFormData,
    "updateFormData",
    ()=>updateFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBDEtou6ehnOgRob3sI8DZUJdOBdEZvWVk"),
    authDomain: ("TURBOPACK compile-time value", "doctorsdata-746d8.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "doctorsdata-746d8"),
    storageBucket: ("TURBOPACK compile-time value", "doctorsdata-746d8.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "996912669214"),
    appId: ("TURBOPACK compile-time value", "1:996912669214:web:6528cb2846b7fedf10840f")
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const checkDuplicate = async (collectionName, fieldName, value, excludeDocId)=>{
    try {
        let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, collectionName), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])(fieldName, '==', value), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(1));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        if (querySnapshot.empty) return false;
        // If we have a match, check if it's the same document we're updating
        if (excludeDocId) {
            const match = querySnapshot.docs[0];
            return match.id !== excludeDocId;
        }
        return true;
    } catch (error) {
        console.error(`Error checking duplicate for ${fieldName}:`, error);
        return false;
    }
};
const saveFormData = async (collectionName, data, currentUser = 'System')=>{
    try {
        const auditData = {
            ...data,
            CreatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            UpdatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            CreatedBy: currentUser,
            UpdatedBy: currentUser,
            IsActive: true
        };
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, collectionName), auditData);
        console.log('Document written with ID: ', docRef.id);
        return {
            success: true,
            id: docRef.id
        };
    } catch (error) {
        console.error('Error adding document: ', error);
        return {
            success: false,
            error
        };
    }
};
const updateFormData = async (collectionName, docId, data, currentUser = 'System')=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, collectionName, docId);
        const updateData = {
            ...data,
            UpdatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
            UpdatedBy: currentUser
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(docRef, updateData);
        console.log('Document updated with ID: ', docId);
        return {
            success: true
        };
    } catch (error) {
        console.error('Error updating document: ', error);
        return {
            success: false,
            error
        };
    }
};
const getCollectionData = async (collectionName)=>{
    try {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, collectionName), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('CreatedAt', 'desc'));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
        const data = querySnapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error('Error fetching collection data: ', error);
        return {
            success: false,
            error
        };
    }
};
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DataEntryForm/DataEntryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/DataEntryForm/DataEntryForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DataEntryForm = ({ isModal = false, onSuccess, onCancel, mode = 'create', initialData, currentUserEmail = 'System' })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        surname: initialData?.surname || '',
        givenName: initialData?.givenName || '',
        middleName: initialData?.middleName || '',
        specialty: initialData?.specialty || '',
        department: initialData?.department || '',
        phicNo: initialData?.phicNo || '',
        birTan: initialData?.birTan || '',
        contactNo: initialData?.contactNo || '',
        email: initialData?.email || '',
        privacyAccepted: mode !== 'create'
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatBirTan = (val)=>{
        // Remove all non-digits
        const cleanValue = val.replace(/\D/g, '');
        // Insert hyphen every 3 digits
        const parts = cleanValue.match(/.{1,3}/g);
        return parts ? parts.join('-') : cleanValue;
    };
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[name];
                return newErrors;
            });
        }
        if (type === 'checkbox') {
            const checked = e.target.checked;
            setFormData((prev)=>({
                    ...prev,
                    [name]: checked
                }));
        } else if (name === 'birTan') {
            const maskedValue = formatBirTan(value);
            if (maskedValue.length <= 15) {
                setFormData((prev)=>({
                        ...prev,
                        [name]: maskedValue
                    }));
            }
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const validateForm = ()=>{
        const errors = {};
        const requiredFields = [
            'surname',
            'givenName',
            'specialty',
            'phicNo',
            'birTan',
            'contactNo',
            'email'
        ];
        requiredFields.forEach((field)=>{
            if (!formData[field]) {
                errors[field] = true;
            }
        });
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            setError('Please fill in all required fields.');
            return;
        }
        setError('');
        setLoading(true);
        try {
            // Check for duplicates
            const excludeId = mode === 'edit' ? initialData?.id : undefined;
            const isEmailDuplicate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDuplicate"])('doctors', 'email', formData.email, excludeId);
            if (isEmailDuplicate) {
                setError('A physician with this email address is already registered.');
                setLoading(false);
                return;
            }
            const isPhicDuplicate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDuplicate"])('doctors', 'phicNo', formData.phicNo, excludeId);
            if (isPhicDuplicate) {
                setError('A physician with this PHIC(PMA) NO. is already registered.');
                setLoading(false);
                return;
            }
            const isBirDuplicate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDuplicate"])('doctors', 'birTan', formData.birTan, excludeId);
            if (isBirDuplicate) {
                setError('A physician with this BIR-TAN # is already registered.');
                setLoading(false);
                return;
            }
            let result;
            if (mode === 'edit' && initialData?.id) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFormData"])('doctors', initialData.id, formData, currentUserEmail);
            } else {
                // Add creation source
                const dataToSave = {
                    ...formData,
                    CreatedFrom: isModal ? 'Manual Creation' : 'Form'
                };
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveFormData"])('doctors', dataToSave, currentUserEmail);
            }
            if (result.success) {
                setSubmitted(true);
                if (onSuccess) {
                    setTimeout(()=>{
                        onSuccess();
                    }, 2000); // Give user a moment to see success state
                }
                if (mode === 'create') {
                    // Clear form after success only on create
                    setFormData({
                        surname: '',
                        givenName: '',
                        middleName: '',
                        specialty: '',
                        department: '',
                        phicNo: '',
                        birTan: '',
                        contactNo: '',
                        email: '',
                        privacyAccepted: false
                    });
                    setFieldErrors({});
                }
            } else {
                const errorMessage = result.error?.code === 'permission-denied' ? 'Firestore permission denied. Please check your security rules in the Firebase Console.' : `Failed to ${mode === 'edit' ? 'update' : 'submit'} form. Please try again later.`;
                setError(errorMessage);
            }
        } catch (err) {
            console.error('Submission error:', err);
            setError('An unexpected error occurred. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    if (submitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successIcon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "80",
                        height: "80",
                        viewBox: "0 0 80 80",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "40",
                                cy: "40",
                                r: "38",
                                stroke: "var(--accent-green)",
                                strokeWidth: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M24 40L34 50L56 28",
                                stroke: "var(--accent-green)",
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M30 65C30 65 35 60 40 60C45 60 50 65 50 65",
                                stroke: "var(--neutral-grey)",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                opacity: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Submission Received!"
                }, void 0, false, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        "Thank you, Dr. ",
                        formData.surname,
                        ". Your information has been securely transmitted and is being processed by the VisayasMed Administration."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSubmitted(false),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resetButton,
                    children: "Submit Another Entry"
                }, void 0, false, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
            lineNumber: 178,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const formatFullDate = (timestamp)=>{
        if (!timestamp) return 'N/A';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
        return date.toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formWrapper} ${isModal ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalMode : ''}`,
        children: [
            !isModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/Visayas Medical.png",
                            alt: "VisayasMed Hospital Logo",
                            width: 65,
                            height: 65,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hospitalLogo,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "VISAYASMED HOSPITAL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "A MEMBER OF APPLEONE MEDICAL GROUP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressInfo,
                        children: "85 Osmeña Blvd., Brgy. Sta. Cruz, Cebu City, Philippines 6000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactInfo,
                        children: "Tel: (032) 253 1901 • www.visayasmedcebu.com.ph"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerSeparator
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Personal Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "surname",
                                        children: "SURNAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "surname",
                                        name: "surname",
                                        value: formData.surname,
                                        onChange: handleChange,
                                        placeholder: "Enter Surname",
                                        className: fieldErrors.surname ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.surname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 243,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "givenName",
                                        children: "GIVEN NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "givenName",
                                        name: "givenName",
                                        value: formData.givenName,
                                        onChange: handleChange,
                                        placeholder: "Enter Given Name",
                                        className: fieldErrors.givenName ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.givenName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 258,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "middleName",
                                        children: "MIDDLE NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "middleName",
                                        name: "middleName",
                                        value: formData.middleName,
                                        onChange: handleChange,
                                        placeholder: "Enter Middle Name",
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Professional Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "specialty",
                                        children: "SPECIALTY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "specialty",
                                        name: "specialty",
                                        value: formData.specialty,
                                        onChange: handleChange,
                                        placeholder: "e.g. Cardiology, Pediatrics",
                                        className: fieldErrors.specialty ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.specialty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 290,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "department",
                                        children: "DEPARTMENT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "department",
                                        name: "department",
                                        value: formData.department,
                                        onChange: handleChange,
                                        placeholder: "e.g. Internal Medicine",
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Regulatory Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "phicNo",
                                        children: "PHIC(PMA) NO."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "phicNo",
                                        name: "phicNo",
                                        value: formData.phicNo,
                                        onChange: handleChange,
                                        placeholder: "00-000000000-0",
                                        className: fieldErrors.phicNo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.phicNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 322,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "birTan",
                                        children: "BIR-TAN #"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "birTan",
                                        name: "birTan",
                                        value: formData.birTan,
                                        onChange: handleChange,
                                        placeholder: "000-000-000-000",
                                        className: fieldErrors.birTan ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.birTan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 337,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Contact Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 341,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "contactNo",
                                        children: "CONTACT NUMBER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        id: "contactNo",
                                        name: "contactNo",
                                        value: formData.contactNo,
                                        onChange: handleChange,
                                        placeholder: "+63 9XX XXX XXXX",
                                        className: fieldErrors.contactNo ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.contactNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 356,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        children: "EMAIL ADDRESS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        placeholder: "e.g. doctor@visayasmed.ph",
                                        className: fieldErrors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].invalid : '',
                                        readOnly: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 371,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].privacySection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        name: "privacyAccepted",
                                        checked: formData.privacyAccepted,
                                        onChange: handleChange,
                                        disabled: mode === 'view',
                                        suppressHydrationWarning: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxLabel,
                                        children: [
                                            "I hereby acknowledge that I have read and understood the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Data Privacy Act of 2012"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 386,
                                                columnNumber: 72
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " and consent to the collection and processing of my personal data for VisayasMed Hospital's record-keeping purposes."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 389,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 375,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitRow,
                        children: [
                            isModal && mode !== 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
                                disabled: loading,
                                children: "Discard"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 394,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode !== 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                                disabled: !formData.privacyAccepted || loading,
                                children: loading ? 'Submitting...' : mode === 'edit' ? 'Update Details' : isModal ? 'Register Physician' : 'Finalize and Submit Registry'
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    mode === 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '2rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                                children: "Audit Information"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditLabel,
                                                children: "Created By"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                children: initialData?.CreatedBy || 'System'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 409,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditLabel,
                                                children: [
                                                    "Created At (",
                                                    initialData?.CreatedFrom || 'Form',
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                suppressHydrationWarning: true,
                                                children: formatFullDate(initialData?.CreatedAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditLabel,
                                                children: "Last Updated By"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                children: initialData?.UpdatedBy || initialData?.CreatedBy || 'System'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditLabel,
                                                children: "Last Updated At"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                suppressHydrationWarning: true,
                                                children: formatFullDate(initialData?.UpdatedAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 421,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 408,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DataEntryForm, "dDIwgOeET1dORvkQTD73rhNZGiA=");
_c = DataEntryForm;
const __TURBOPACK__default__export__ = DataEntryForm;
var _c;
__turbopack_context__.k.register(_c, "DataEntryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_665888cc._.js.map