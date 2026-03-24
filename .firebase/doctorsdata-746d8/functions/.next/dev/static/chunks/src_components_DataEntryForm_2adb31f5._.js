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
  "required": "DataEntryForm-module__-_tJAq__required",
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
"[project]/src/components/DataEntryForm/DataEntryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/DataEntryForm/DataEntryForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DataEntryForm = ({ isModal = false, onSuccess, onCancel, mode = 'create', initialData, currentUserEmail = 'System' })=>{
    _s();
    const { executeRecaptcha } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoogleReCaptcha"])();
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
            if (formData.phicNo) {
                const isPhicDuplicate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDuplicate"])('doctors', 'phicNo', formData.phicNo, excludeId);
                if (isPhicDuplicate) {
                    setError('A physician with this PHIC(PMA) NO. is already registered.');
                    setLoading(false);
                    return;
                }
            }
            if (formData.birTan) {
                const isBirDuplicate = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkDuplicate"])('doctors', 'birTan', formData.birTan, excludeId);
                if (isBirDuplicate) {
                    setError('A physician with this BIR-TAN # is already registered.');
                    setLoading(false);
                    return;
                }
            }
            let result;
            if (mode === 'edit' && initialData?.id) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFormData"])('doctors', initialData.id, formData, currentUserEmail);
            } else {
                // Generate reCAPTCHA token (A04)
                if (!executeRecaptcha) {
                    setError('reCAPTCHA not initialized. Please refresh.');
                    ("TURBOPACK compile-time value", "development") === 'development' && console.warn('Missing executeRecaptcha');
                    setLoading(false);
                    return;
                }
                const captchaToken = await executeRecaptcha('register_doctor');
                // Use the new secure API for registration (A01, A03, A09, A04)
                const response = await fetch('/api/doctors', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...formData,
                        CreatedFrom: isModal ? 'Manual Creation' : 'Form',
                        captchaToken
                    })
                });
                result = await response.json();
            }
            if (result.success) {
                setSubmitted(true);
                if (onSuccess) {
                    setTimeout(()=>{
                        onSuccess();
                    }, 2000); // Give user a moment to see success state
                }
            // Clearing logic moved to Reset button to keep surname on success screen
            } else {
                const errorMessage = result.error || (result.error?.code === 'permission-denied' ? 'Firestore permission denied. Please check your security rules in the Firebase Console.' : `Failed to ${mode === 'edit' ? 'update' : 'submit'} form. Please try again later.`);
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
                                lineNumber: 187,
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
                                lineNumber: 188,
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
                                lineNumber: 189,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Submission Received!"
                }, void 0, false, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 192,
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
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        if (mode === 'create') {
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
                        setSubmitted(false);
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resetButton,
                    children: "Submit Another Entry"
                }, void 0, false, {
                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
            lineNumber: 184,
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
                            lineNumber: 238,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "VISAYASMED HOSPITAL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "A MEMBER OF APPLEONE MEDICAL GROUP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressInfo,
                        children: "85 Osmeña Blvd., Brgy. Sta. Cruz, Cebu City, Philippines 6000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactInfo,
                        children: "Tel: (032) 253 1901 • www.visayasmedcebu.com.ph"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerSeparator
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                lineNumber: 236,
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
                        lineNumber: 256,
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
                                        children: [
                                            "SURNAME",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 259,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 259,
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
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.surname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 271,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "givenName",
                                        children: [
                                            "GIVEN NAME",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 274,
                                                columnNumber: 50
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 274,
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
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.givenName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 286,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 273,
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
                                        lineNumber: 289,
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
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Professional Details"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 303,
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
                                        children: [
                                            "SPECIALTY",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 306,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 306,
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
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.specialty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 318,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 305,
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
                                        lineNumber: 321,
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
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Regulatory Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 335,
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
                                        lineNumber: 338,
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
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.phicNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 350,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 337,
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
                                        lineNumber: 353,
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
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.birTan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 365,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: "Contact Information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 369,
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
                                        children: [
                                            "CONTACT NUMBER",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 372,
                                                columnNumber: 54
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 372,
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
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.contactNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 384,
                                        columnNumber: 39
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        children: [
                                            "EMAIL ADDRESS",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 387,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 387,
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
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    fieldErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldErrorMessage,
                                        children: "This is a required field"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 399,
                                        columnNumber: 35
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].privacySection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                    lineNumber: 405,
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
                                            lineNumber: 414,
                                            columnNumber: 72
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " and consent to the collection and processing of my personal data for VisayasMed Hospital's record-keeping purposes."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 419,
                        columnNumber: 19
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
                                lineNumber: 423,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            mode !== 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                                disabled: !formData.privacyAccepted || loading,
                                children: loading ? 'Submitting...' : mode === 'edit' ? 'Update Details' : isModal ? 'Register Physician' : 'Finalize and Submit Registry'
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 421,
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
                                lineNumber: 436,
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
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                children: initialData?.CreatedBy || 'System'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 438,
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
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                suppressHydrationWarning: true,
                                                children: formatFullDate(initialData?.CreatedAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 442,
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
                                                lineNumber: 447,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                children: initialData?.UpdatedBy || initialData?.CreatedBy || 'System'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 448,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 446,
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
                                                lineNumber: 451,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataEntryForm$2f$DataEntryForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditValue,
                                                suppressHydrationWarning: true,
                                                children: formatFullDate(initialData?.UpdatedAt)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                        lineNumber: 435,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DataEntryForm/DataEntryForm.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DataEntryForm, "lSN0kElPnMdC6GW/JGVBm8Tx6C4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoogleReCaptcha"]
    ];
});
_c = DataEntryForm;
const __TURBOPACK__default__export__ = DataEntryForm;
var _c;
__turbopack_context__.k.register(_c, "DataEntryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_DataEntryForm_2adb31f5._.js.map