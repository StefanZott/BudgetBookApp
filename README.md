# Budget Book App

## Beschreibung
Mit dieser App soll es dem User möglich sein, seine Einnahmen und Ausgaben zu kontrollieren. 

## Voraussetzungen  
```
NodeJs:        v20.13.1
React:         v18.2.0
React Native:  v0.74.1
TypeScript:    v5.0.4
JDK:           v11.0.23

VS code
Android Studio Jellyfish 2023.3.1
```

## Zusätzliche Packete
<table>
  <thead>
    <tr>
      <th>Packet</th>
      <th>Command</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>React Navigation Stack</td>
      <td>@react-navigation/stack</td>
      <td>6.3.29</td>
    </tr>
    <tr>
      <td>React Navigation Native Stack</td>
      <td>@react-navigation/native-stack</td>
      <td>6.9.26</td>
    </tr>
    <tr>
      <td>React Navigation Bottom Tabs</td>
      <td>@react-navigation/bottom-tabs</td>
      <td>6.5.20</td>
    </tr>
    <tr>
      <td>React Navigation Native</td>
      <td>@react-navigation/native</td>
      <td>6.1.17</td>
    </tr>
    <tr>
      <td>React Native Screens</td>
      <td>react-native-screens</td>
      <td>3.31.1</td>
    </tr>
    <tr>
      <td>React Native Safe Area Context</td>
      <td>react-native-safe-area-context</td>
      <td>4.10.1</td>
    </tr>
    <tr>
      <td>React Native Firebase App</td>
      <td>@react-native-firebase/app</td>
      <td>20.0.0</td>
    </tr>
    <tr>
      <td>React Native Firebase Auth</td>
      <td>@react-native-firebase/auth</td>
      <td>20.0.0</td>
    </tr>
    <tr>
      <td>React Native Firebase Firestore</td>
      <td>@react-native-firebase/firestore</td>
      <td>20.0.0</td>
    </tr>
    <tr>
      <td>React Native Firebase </td>
      <td>firestore</td>
      <td>10.12.2</td>
    </tr>
  </tbody>
</table>

## Firebase
1. google-services.json generieren
  1. Projektübersicht -> Einstellungen
  2. Auf den Tab Allgemein klicken
  3. Abschnitt "Meine Apps"
  4. Dann "App hinzufügen"
  5. Danach die google-services.json downloaden
2. Die Datei im Projektverzeichnis unter android->app kopieren

## Vector Icons
Link: https://www.npmjs.com/package/react-native-vector-icons
Install Command: npm i react-native-vector-icons or npm i --save react-native-vector-icons
## Implemenation iOS
1. Copy folder Fonts from node_modules/react-native-vector-icons/ to ROOT/ios/<Project_Name>
2. Copy this code in ROOT/ios/<Project_Name>/info.plist:
<key>UIAppFonts</key>
<array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
</array>
3. Create a new File with the name "reatc-native.config.js" in root layer
## Implementation android
1. Add code in andriod/app/build.grandle:
    apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
2. Add code in andriod/settings.grandle:
    include ':react-native-vector-icons'
    project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
3. Add code in andriod/app/build.grandle to dependencies:
    implementation project(':react-native-vector-icons')
4. Folgende Zeilen in der MainApplication.kt hinzufügen:
   1. import com.oblador.vectoricons.VectorIconsPackage;
   2. add(VectorIconsPackage()) in der PackageList ergänzen 