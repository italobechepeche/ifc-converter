<a href='https://ko-fi.com/Z8Z15UXLM' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
# Ifc Converter

Ifc Converter is a ready to use wrapper of ifcConvert that is promise-based.<br/>
It already bundles the ifcConvert binaries at version 0.6.0 for linux, windows and osx.
<br/><br/>
<b>The binaries are packed with upx for smaller size.</b>

# Supported extensions
```
┌───────┬───────────────┬───────────────────────────────────────────┐
│- .obj │ WaveFront OBJ │(a .mtl file is also created)              │
│- .dae │ Collada       │Digital Assets Exchange                    │
│- .glb │ glTF          │Binary glTF v2.0                           │
│- .stp │ STEP          │Standard for the Exchange of Product Data  │
│- .igs │ IGES          │Initial Graphics Exchange Specification    │
│- .xml │ XML           │Property definitions and decomposition tree│
│- .svg │ SVG           │Scalable Vector Graphics (2D floor plan)   │
│- .ifc │ IFC-SPF       │Industry Foundation Classes                │
└───────┴───────────────┴───────────────────────────────────────────┴
```

[IfcOpenShell IfcConvert page](http://ifcopenshell.org/ifcconvert)

# Usage

## Javascript

```javascript
const ifcConvert = require('ifc-convert');

ifcConvert('source.ifc', 'dest.glb')
    .then(function() {
        // the file is converted to glb
    }).catch((error) => {
        // instance of a Error containing the 
        // message extracted from ifcConvert binary
    });
```

## Typescript

```typescript
import * as IfcConverter from 'ifc-converter';

IfcConverter('source.ifc', 'dest.glb')
    .then(function() {
        // the file is converted to glb
    }).catch((error) => {
        // instance of a Error containing the 
        // message extracted from ifcConvert binary
    });
```
