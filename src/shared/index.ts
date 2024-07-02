export const config = {
    logoCount: 5,
    firebaseConfig: {
        apiKey: "AIzaSyBw_h79Vg523WiQcOZ_VNvcFjyLuKffsIk",
        authDomain: "keshumeeting.firebaseapp.com",
        projectId: "keshumeeting",
        storageBucket: "keshumeeting.appspot.com",
        messagingSenderId: "928529651524",
        appId: "1:928529651524:web:187d343d61f7eea51d2911",
        measurementId: "G-73J7QGDNV2"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

