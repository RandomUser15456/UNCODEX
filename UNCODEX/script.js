


const sleep=MS=> new Promise(resolve => setTimeout(resolve, MS));
function Log (msg,u=0) {
    if ( u == 0 ) console.log('%c [Log]: '+msg, 'background: black; color: white; font-family: cursive;');
    if ( u == 1 ) console.log('%c [WARNING]: '+msg, 'background: black; color: yellow; font-family: cursive;');
    if ( u == 2 ) console.log('%c [ERROR]: '+msg, 'background: red; color: white; font-family: cursive;');
    if ( u == 3 ) console.log('%c [INFO]: '+msg, 'background: black; color: blue; font-family: cursive;');
    }
function NewElement ( parent, type, c ) {
        let $C=(parent)=>top.document.createElement(parent);
        let $A=(parent,child)=>parent.appendChild(child)
        let _=$C(type);
        _.add = (k,_9) => k.textContent+=_9;
        $A(parent,_);
        if ( !c ) return _;
        switch (type){
            case 'script':
        _.src=c
            break;
            case 'link':
        _.href=c
            break;
            case 'style':
        _.textContent=c;
            break;
          default:
        _.style=c
        }
        return _
    }
function Use () {
    let types = {
    i64:[BigInt64Array,8],
    i32:[Int32Array,4],
    i16:[Int16Array,2],
    i8:[Int8Array,1],
    u64:[BigUint64Array,8],
    u32:[Uint32Array,4],
    u16:[Uint16Array,2],
    u8:[Uint8Array,1],
    f64:[Float64Array,8],
    f32:[Float32Array,4],
    }
    if ( arguments[0] == "set" ) return new Uint8Array(arguments[2]?new types[arguments[1]][0]([arguments[2]]).buffer:new Uint8Array(types[arguments[1]][1]));
    if ( arguments[0] == "get" ) return new types[arguments[1]][0](arguments[2]?new Uint8Array(arguments[2]).buffer:0)[0];
    
    }
function downloadFile(buffer, filename) {
        let blob = new Blob([buffer], { type: 'application/octet-stream' });
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
function syntaxHighlight(json) {
        json = JSON.stringify(json, undefined, 2);
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            let cls = 'json-number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'json-key';
                } else {
                    cls = 'json-string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'json-boolean';
            } else if (/null/.test(match)) {
                cls = 'json-null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
function renderOutput(c) {
    window.ZipFile = new JSZip();
    fileExplorer.style.transform = "scaleY(1)";
    fileExplorer.innerHTML = ``;
        Object.entries(c).forEach(l => {
            let parts = l[0].split("/");
            let lastParent = fileExplorer;
            let lastZipDirectory = window.ZipFile;
            parts.forEach((l1, i) => {
                if (i == parts.length - 1) {
                    lastZipDirectory.file(l1,new Uint8Array(l[1]));
                    let div = NewElement(lastParent, "div");
                    div.className = "File"
                    div.textContent = l1;
                    div.onclick = function() {
                        selectedReference.textContent = l[0];
                        if (l1.includes(".unity3d")) {
                            const buf = new StreamBuffer(new Uint8Array(l[1]));
                            let data = {
                                data: "Can't get data."
                            };
                            data.signature = buf.ReadStringToNull();
                            data.version = buf.ReadUInt32(false);
                            data.unityVersion = buf.ReadStringToNull();
                            data.unityRevision = buf.ReadStringToNull();
                            filePreview.innerHTML = syntaxHighlight(data);
                        } else if (l1.includes(".config") || l1.includes(".json")) {
                            let uft8 = new TextDecoder().decode(new Uint8Array(l[1]));
                            if (l1.includes(".json")) {
                                filePreview.innerHTML = syntaxHighlight(JSON.parse(uft8));
                            } else {
                                filePreview.textContent = uft8;
                            }
                        } else {
                            filePreview.textContent = "Can't show a preview of this file"
                        }
                    }
                } else {
                    let div = NewElement(lastParent, "div")
                    div.className = "Folder"
                    div.innerHTML = `
                <div class="FolderTxt">${l1}</div>
                <div class="FolderContainer"></div>
                `
                    div.onclick = function() {
                        !div.children[1].style.display == "none" ? div.children[1].style.display = "none" : div.children[1].style.display = "flex"
                    }
                    lastParent = div.children[1];
                    lastZipDirectory = lastZipDirectory.folder(l1);
                }
    
            })
        })
    }
class data_prop {
    constructor(ofs, size, name) {
        this.ofs = ofs;
        this.size = size;
        this.name = name;
    }
    ofs;
    size;
    name;
}
class StreamBuffer {
    array=[];
    index=0;
    constructor (l) {
    this.array = [...l];
    }
    WriteBytes (l) {
    this.array.push(...l);
    }
    WriteByte (l) {
        this.array.push(l);
    }
    WriteUInt32 (value,littleEndian=true) {
    let view = new DataView(new ArrayBuffer(4));
    view.setUint32(0,value, littleEndian);
    this.WriteBytes([...new Uint8Array(view.buffer)])
    }
    WriteInt32 (value,littleEndian=true) {
        let view = new DataView(new ArrayBuffer(4));
        view.setInt32(0,value, littleEndian);
        this.WriteBytes([...new Uint8Array(view.buffer)])
    }
    WriteStringToNull (value) {
        this.WriteBytes([...new TextEncoder().encode(value),0])
    }
    ReadBytes (l) {
    let a = this.array.slice(this.index,this.index+l);
    this.index+=l;
    return a;
    }
    ReadStringToNull(max_length=Infinity) {
        let text = '';
        let i = 0;
        while (i < this.array.length&& i<max_length) {
            const byte = this.ReadByte();
            if (byte === 0)  break;
            text += String.fromCharCode(byte);
            i++;
        }
        return text;
    }
    ReadByte () {
    return this.ReadBytes(1)[0];
    }
    ReadUInt32 (littleEndian=true) {
    return new DataView(new Uint8Array(this.ReadBytes(4)).buffer).getInt32(0,littleEndian)
    }
    ReadInt32 (littleEndian=true) {
    return new DataView(new Uint8Array(this.ReadBytes(4)).buffer).getUint32(0,littleEndian)
    }
    ReadInt64 (littleEndian) {
    return new DataView(new Uint8Array(this.ReadBytes(8)).buffer).getBigInt64(0,littleEndian)
    }
    AlignStream (alignment) {
			let mod = this.index % alignment;
			if (mod != 0) this.index += alignment - mod;
	}
    async ReadFromOffSet(offset, size, callback) {
        let Copy = [...this.array];
        callback(Copy.splice(offset, size))
    }
    Write(t) {
    this.array.push(...t)
    }
}    



let collected = {};


    



async function dump (fileData,buf) {
    collected={};
    for (let i=0; i<fileData.nodes.length; i++) {
        await sleep(1e3);
        ProgressBar0.set((i+1)*100/fileData.nodes.length);
        let node = fileData.nodes[i];
        buf.index = node.ofs;
        buf.ReadFromOffSet(node.ofs,node.size,(e)=>collected[node.name]=e)
    }
    renderOutput (collected)
    DownloadButton.style.display = "";
}
async function load (file,arr) {
    const buf = new StreamBuffer(new Uint8Array(arr));
    let fileData = {};
    window.View = buf;
    fileData.signature = buf.ReadStringToNull();
    fileData.headLen = buf.ReadUInt32();
    fileData.name = file.name;
    signatureInput.textContent = `Name: ${fileData.name} || Signature: ${fileData.signature}`
    fileData.path = file.name.split(".")[0] + "_dump";
    fileData.nodes = [];
    while (buf.index < fileData.headLen) {
    fileData.nodes.push(
        new data_prop(
        buf.ReadUInt32(), 
        buf.ReadUInt32(),
        new TextDecoder().decode(new Uint8Array(buf.ReadBytes(buf.ReadInt32())))
    ));
    }
    window.fileData = fileData;
    dump(fileData,buf);
}


class SerializedFileHeader {
    m_MetadataSize;
    m_FileSize;
    m_Version;
    m_DataOffset;
    m_Endianess;
    m_Reserved;

    constructor(metadataSize, fileSize, version, dataOffset, endianess, reserved) {
        this.m_MetadataSize = metadataSize; 
        this.m_FileSize = fileSize;
        this.m_Version = version;
        this.m_DataOffset = dataOffset;
        this.m_Endianess = endianess;
        this.m_Reserved = reserved;
    }
}

/*
const gzipMagic = [31, 139];
const brotliMagic = [98, 114, 111, 116, 108, 105];
const zipMagic = [80, 75, 3, 4];
const zipSpannedMagic = [80, 75, 7, 8];
*/
let lastFileName = "";

async function loadunity3d (file,arr) {
    const buf = new StreamBuffer(new Uint8Array(arr));
    let fileData = {};
    window.View = buf;
    fileData.name = file.name;
    fileData.signature = buf.ReadStringToNull();
    fileData.version = buf.ReadUInt32(false);
    fileData.unityVersion = buf.ReadStringToNull();
    fileData.unityRevision = buf.ReadStringToNull();
    signatureInput.textContent = `UnityRevision:${fileData.unityRevision} ||UnityVersion:${fileData.unityVersion} ||Name: ${fileData.name} ||Signature: ${fileData.signature}`;
    fileData.size = buf.ReadInt64(false);
    fileData.compressedBlocksInfoSize = buf.ReadUInt32(false);
    fileData.uncompressedBlocksInfoSize = buf.ReadUInt32(false);
    fileData.flags = buf.ReadUInt32(false);
    let blocksInfoBytes = [];
    if (fileData.version >= 7) buf.AlignStream(16);
    if ((fileData.flags & window.Vars.ArchiveFlags.BlocksInfoAtTheEnd) != 0)
        {
            var position = buf.index;
            buf.index = buf.array.length - fileData.compressedBlocksInfoSize;
            blocksInfoBytes = fileData.compressedBlocksInfoSize;
            buf.index = position;
        }
        else //0x40 BlocksAndDirectoryInfoCombined
        {
            blocksInfoBytes = buf.ReadBytes(fileData.compressedBlocksInfoSize);
        }
    let blocksInfoUncompresseddStream = new StreamBuffer([]);
    var uncompressedSize = fileData.uncompressedBlocksInfoSize;
    var compressionType = fileData.flags & window.Vars.ArchiveFlags.CompressionTypeMask;
    switch (compressionType)
    {
        case window.Vars.CompressionType.None:
            {
                blocksInfoUncompresseddStream = new StreamBuffer(blocksInfoBytes);
                break;
            }
        case window.Vars.CompressionType.Lzma:
            {
                blocksInfoUncompresseddStream = new StreamBuffer(uncompressedSize);
                var blocksInfoCompressedStream = new StreamBuffer(blocksInfoBytes)
                SevenZipHelper.StreamDecompress(blocksInfoCompressedStream, blocksInfoUncompresseddStream, fileData.compressedBlocksInfoSize, fileData.uncompressedBlocksInfoSize);
                blocksInfoUncompresseddStream.index = 0;
                break;
            }
        case window.Vars.CompressionType.Lz4:
        case window.Vars.CompressionType.Lz4HC:
            {
                var uncompressedBytes = [uncompressedSize];
                var numWrite = LZ4Codec.Decode(blocksInfoBytes, uncompressedBytes);
                if (numWrite != uncompressedSize)
                {
                    throw new IOException(`Lz4 decompression error, write {numWrite} bytes but expected ${uncompressedSize} bytes`);
                }
                blocksInfoUncompresseddStream = new StreamBuffer(uncompressedBytes);
                break;
            }
        default:throw new IOException(`Unsupported compression type ${compressionType}`);
    }
    window.fileData = fileData;
}
async function loadzip (file,arr) {
    lastFileName = file.name;
    signatureInput.textContent = `Name: ${file.name}`;
    let zip = await JSZip.loadAsync(arr);
    window.LoadedZipFile = zip;
    let NewCollected = Object.fromEntries(Object.entries(zip.files).filter(l=>l[1]._data.compressedContent).map(([p,l])=>[p,[...l._data.compressedContent]]));
    renderOutput (NewCollected);
    window.NewCollected = NewCollected;
    PackFileButton.style.display = "";
}


const FileInputButton = document.getElementById('FileInputButton');
const FileInput = document.getElementById('fileInput');
const signatureInput = document.getElementById('signatureInput');
const fileExplorer = document.getElementById('fileExplorer');
const filePreview = document.getElementById('filePreview');
const ProgressBar0 = document.getElementById('ProgressBar0');
const selectedReference = document.getElementById('selectedReference');
const DownloadButton = document.getElementById('DownloadButton');
const PackFileButton = document.getElementById('PackFileButton');
ProgressBar0.set = function (p) {
    if (p>100) return;
    ProgressBar0.children[0].style.width = `${p==100?0:p}%`;
}


FileInputButton.onclick = () =>FileInput.click();
FileInput.addEventListener('change', function() {
    const file = FileInput.files[0];
    if (!file) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            if (file.name.includes(".unity3d")) {
            loadunity3d(file,e.target.result)
            } else if (file.name.includes(".zip")) {
            loadzip(file,e.target.result)
            } else {
            load(file,e.target.result)
            }
        };
        reader.readAsArrayBuffer(file);
});

DownloadButton.onclick = async function () {
    PackFileButton.style.display="none"
    let zipBlob = await window.ZipFile.generateAsync({ type: "blob" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = fileData.path+".zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
PackFileButton.onclick = async function () {
    DownloadButton.style.display="none"
    let buf = new StreamBuffer([])
    let signature = "UnityWebData1.0";
    let NewCollected = window.NewCollected;
    let entries = Object.entries(NewCollected);
    let headLen=entries.length*12+signature.length+1+4;
    entries.forEach(l=>headLen+=l[0].length)
    buf.WriteStringToNull(signature);
    buf.WriteUInt32(headLen);
    let offset = headLen;
    entries.forEach(l=>{
    let size = l[1].length
    buf.WriteUInt32(offset);
    buf.WriteUInt32(size);
    buf.WriteUInt32(l[0].length);
    buf.WriteBytes([...new TextEncoder().encode(l[0])])
    offset+=size;
    });
    entries.forEach(l=>{
    buf.array = [...buf.array,...l[1]]
    });
    downloadFile(new Uint8Array(buf.array),lastFileName.split(".")[0]+".data.br")
}

