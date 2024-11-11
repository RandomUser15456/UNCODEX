function Enum(_) {
    var g = {};
    var c = 0;
    _.replaceAll(/\[.*?\]/g, '').replaceAll(' ', '').replaceAll('\t', '').split(',').map(p => {
        if (p.includes('//') && p.includes('\n')) {
            p = p.replace(/\/\/.*?\n/g, "");
        }
        if (p.includes('\n')) {
            p = p.replaceAll('\n', '')
        }
        if (p != '') {
            if (p.includes('=')) {
                g[p.split('=')[0]] = JSON.parse(p.split('=')[1])
                c = p.split('=')[1]
            } else {
                g[p] = c
            }
        }
        c++
    })
    return g
}


window.Vars = {
    ClassIDType:Enum(`
        	// Token: 0x0400048F RID: 1167
		UnknownType = -1,
		// Token: 0x04000490 RID: 1168
		Object,
		// Token: 0x04000491 RID: 1169
		GameObject,
		// Token: 0x04000492 RID: 1170
		Component,
		// Token: 0x04000493 RID: 1171
		LevelGameManager,
		// Token: 0x04000494 RID: 1172
		Transform,
		// Token: 0x04000495 RID: 1173
		TimeManager,
		// Token: 0x04000496 RID: 1174
		GlobalGameManager,
		// Token: 0x04000497 RID: 1175
		Behaviour = 8,
		// Token: 0x04000498 RID: 1176
		GameManager,
		// Token: 0x04000499 RID: 1177
		AudioManager = 11,
		// Token: 0x0400049A RID: 1178
		ParticleAnimator,
		// Token: 0x0400049B RID: 1179
		InputManager,
		// Token: 0x0400049C RID: 1180
		EllipsoidParticleEmitter = 15,
		// Token: 0x0400049D RID: 1181
		Pipeline = 17,
		// Token: 0x0400049E RID: 1182
		EditorExtension,
		// Token: 0x0400049F RID: 1183
		Physics2DSettings,
		// Token: 0x040004A0 RID: 1184
		Camera,
		// Token: 0x040004A1 RID: 1185
		Material,
		// Token: 0x040004A2 RID: 1186
		MeshRenderer = 23,
		// Token: 0x040004A3 RID: 1187
		Renderer = 25,
		// Token: 0x040004A4 RID: 1188
		ParticleRenderer,
		// Token: 0x040004A5 RID: 1189
		Texture,
		// Token: 0x040004A6 RID: 1190
		Texture2D,
		// Token: 0x040004A7 RID: 1191
		OcclusionCullingSettings,
		// Token: 0x040004A8 RID: 1192
		GraphicsSettings,
		// Token: 0x040004A9 RID: 1193
		MeshFilter = 33,
		// Token: 0x040004AA RID: 1194
		OcclusionPortal = 41,
		// Token: 0x040004AB RID: 1195
		Mesh = 43,
		// Token: 0x040004AC RID: 1196
		Skybox = 45,
		// Token: 0x040004AD RID: 1197
		QualitySettings = 47,
		// Token: 0x040004AE RID: 1198
		Shader,
		// Token: 0x040004AF RID: 1199
		TextAsset,
		// Token: 0x040004B0 RID: 1200
		Rigidbody2D,
		// Token: 0x040004B1 RID: 1201
		Physics2DManager,
		// Token: 0x040004B2 RID: 1202
		Collider2D = 53,
		// Token: 0x040004B3 RID: 1203
		Rigidbody,
		// Token: 0x040004B4 RID: 1204
		PhysicsManager,
		// Token: 0x040004B5 RID: 1205
		Collider,
		// Token: 0x040004B6 RID: 1206
		Joint,
		// Token: 0x040004B7 RID: 1207
		CircleCollider2D,
		// Token: 0x040004B8 RID: 1208
		HingeJoint,
		// Token: 0x040004B9 RID: 1209
		PolygonCollider2D,
		// Token: 0x040004BA RID: 1210
		BoxCollider2D,
		// Token: 0x040004BB RID: 1211
		PhysicsMaterial2D,
		// Token: 0x040004BC RID: 1212
		MeshCollider = 64,
		// Token: 0x040004BD RID: 1213
		BoxCollider,
		// Token: 0x040004BE RID: 1214
		CompositeCollider2D,
		// Token: 0x040004BF RID: 1215
		EdgeCollider2D = 68,
		// Token: 0x040004C0 RID: 1216
		CapsuleCollider2D = 70,
		// Token: 0x040004C1 RID: 1217
		ComputeShader = 72,
		// Token: 0x040004C2 RID: 1218
		AnimationClip = 74,
		// Token: 0x040004C3 RID: 1219
		ConstantForce,
		// Token: 0x040004C4 RID: 1220
		WorldParticleCollider,
		// Token: 0x040004C5 RID: 1221
		TagManager = 78,
		// Token: 0x040004C6 RID: 1222
		AudioListener = 81,
		// Token: 0x040004C7 RID: 1223
		AudioSource,
		// Token: 0x040004C8 RID: 1224
		AudioClip,
		// Token: 0x040004C9 RID: 1225
		RenderTexture,
		// Token: 0x040004CA RID: 1226
		CustomRenderTexture = 86,
		// Token: 0x040004CB RID: 1227
		MeshParticleEmitter,
		// Token: 0x040004CC RID: 1228
		ParticleEmitter,
		// Token: 0x040004CD RID: 1229
		Cubemap,
		// Token: 0x040004CE RID: 1230
		Avatar,
		// Token: 0x040004CF RID: 1231
		AnimatorController,
		// Token: 0x040004D0 RID: 1232
		GUILayer,
		// Token: 0x040004D1 RID: 1233
		RuntimeAnimatorController,
		// Token: 0x040004D2 RID: 1234
		ScriptMapper,
		// Token: 0x040004D3 RID: 1235
		Animator,
		// Token: 0x040004D4 RID: 1236
		TrailRenderer,
		// Token: 0x040004D5 RID: 1237
		DelayedCallManager = 98,
		// Token: 0x040004D6 RID: 1238
		TextMesh = 102,
		// Token: 0x040004D7 RID: 1239
		RenderSettings = 104,
		// Token: 0x040004D8 RID: 1240
		Light = 108,
		// Token: 0x040004D9 RID: 1241
		CGProgram,
		// Token: 0x040004DA RID: 1242
		BaseAnimationTrack,
		// Token: 0x040004DB RID: 1243
		Animation,
		// Token: 0x040004DC RID: 1244
		MonoBehaviour = 114,
		// Token: 0x040004DD RID: 1245
		MonoScript,
		// Token: 0x040004DE RID: 1246
		MonoManager,
		// Token: 0x040004DF RID: 1247
		Texture3D,
		// Token: 0x040004E0 RID: 1248
		NewAnimationTrack,
		// Token: 0x040004E1 RID: 1249
		Projector,
		// Token: 0x040004E2 RID: 1250
		LineRenderer,
		// Token: 0x040004E3 RID: 1251
		Flare,
		// Token: 0x040004E4 RID: 1252
		Halo,
		// Token: 0x040004E5 RID: 1253
		LensFlare,
		// Token: 0x040004E6 RID: 1254
		FlareLayer,
		// Token: 0x040004E7 RID: 1255
		HaloLayer,
		// Token: 0x040004E8 RID: 1256
		NavMeshAreas,
		// Token: 0x040004E9 RID: 1257
		NavMeshProjectSettings = 126,
		// Token: 0x040004EA RID: 1258
		HaloManager,
		// Token: 0x040004EB RID: 1259
		Font,
		// Token: 0x040004EC RID: 1260
		PlayerSettings,
		// Token: 0x040004ED RID: 1261
		NamedObject,
		// Token: 0x040004EE RID: 1262
		GUITexture,
		// Token: 0x040004EF RID: 1263
		GUIText,
		// Token: 0x040004F0 RID: 1264
		GUIElement,
		// Token: 0x040004F1 RID: 1265
		PhysicMaterial,
		// Token: 0x040004F2 RID: 1266
		SphereCollider,
		// Token: 0x040004F3 RID: 1267
		CapsuleCollider,
		// Token: 0x040004F4 RID: 1268
		SkinnedMeshRenderer,
		// Token: 0x040004F5 RID: 1269
		FixedJoint,
		// Token: 0x040004F6 RID: 1270
		RaycastCollider = 140,
		// Token: 0x040004F7 RID: 1271
		BuildSettings,
		// Token: 0x040004F8 RID: 1272
		AssetBundle,
		// Token: 0x040004F9 RID: 1273
		CharacterController,
		// Token: 0x040004FA RID: 1274
		CharacterJoint,
		// Token: 0x040004FB RID: 1275
		SpringJoint,
		// Token: 0x040004FC RID: 1276
		WheelCollider,
		// Token: 0x040004FD RID: 1277
		ResourceManager,
		// Token: 0x040004FE RID: 1278
		NetworkView,
		// Token: 0x040004FF RID: 1279
		NetworkManager,
		// Token: 0x04000500 RID: 1280
		PreloadData,
		// Token: 0x04000501 RID: 1281
		MovieTexture = 152,
		// Token: 0x04000502 RID: 1282
		ConfigurableJoint,
		// Token: 0x04000503 RID: 1283
		TerrainCollider,
		// Token: 0x04000504 RID: 1284
		MasterServerInterface,
		// Token: 0x04000505 RID: 1285
		TerrainData,
		// Token: 0x04000506 RID: 1286
		LightmapSettings,
		// Token: 0x04000507 RID: 1287
		WebCamTexture,
		// Token: 0x04000508 RID: 1288
		EditorSettings,
		// Token: 0x04000509 RID: 1289
		InteractiveCloth,
		// Token: 0x0400050A RID: 1290
		ClothRenderer,
		// Token: 0x0400050B RID: 1291
		EditorUserSettings,
		// Token: 0x0400050C RID: 1292
		SkinnedCloth,
		// Token: 0x0400050D RID: 1293
		AudioReverbFilter,
		// Token: 0x0400050E RID: 1294
		AudioHighPassFilter,
		// Token: 0x0400050F RID: 1295
		AudioChorusFilter,
		// Token: 0x04000510 RID: 1296
		AudioReverbZone,
		// Token: 0x04000511 RID: 1297
		AudioEchoFilter,
		// Token: 0x04000512 RID: 1298
		AudioLowPassFilter,
		// Token: 0x04000513 RID: 1299
		AudioDistortionFilter,
		// Token: 0x04000514 RID: 1300
		SparseTexture,
		// Token: 0x04000515 RID: 1301
		AudioBehaviour = 180,
		// Token: 0x04000516 RID: 1302
		AudioFilter,
		// Token: 0x04000517 RID: 1303
		WindZone,
		// Token: 0x04000518 RID: 1304
		Cloth,
		// Token: 0x04000519 RID: 1305
		SubstanceArchive,
		// Token: 0x0400051A RID: 1306
		ProceduralMaterial,
		// Token: 0x0400051B RID: 1307
		ProceduralTexture,
		// Token: 0x0400051C RID: 1308
		Texture2DArray,
		// Token: 0x0400051D RID: 1309
		CubemapArray,
		// Token: 0x0400051E RID: 1310
		OffMeshLink = 191,
		// Token: 0x0400051F RID: 1311
		OcclusionArea,
		// Token: 0x04000520 RID: 1312
		Tree,
		// Token: 0x04000521 RID: 1313
		NavMeshObsolete,
		// Token: 0x04000522 RID: 1314
		NavMeshAgent,
		// Token: 0x04000523 RID: 1315
		NavMeshSettings,
		// Token: 0x04000524 RID: 1316
		LightProbesLegacy,
		// Token: 0x04000525 RID: 1317
		ParticleSystem,
		// Token: 0x04000526 RID: 1318
		ParticleSystemRenderer,
		// Token: 0x04000527 RID: 1319
		ShaderVariantCollection,
		// Token: 0x04000528 RID: 1320
		LODGroup = 205,
		// Token: 0x04000529 RID: 1321
		BlendTree,
		// Token: 0x0400052A RID: 1322
		Motion,
		// Token: 0x0400052B RID: 1323
		NavMeshObstacle,
		// Token: 0x0400052C RID: 1324
		SortingGroup = 210,
		// Token: 0x0400052D RID: 1325
		SpriteRenderer = 212,
		// Token: 0x0400052E RID: 1326
		Sprite,
		// Token: 0x0400052F RID: 1327
		CachedSpriteAtlas,
		// Token: 0x04000530 RID: 1328
		ReflectionProbe,
		// Token: 0x04000531 RID: 1329
		ReflectionProbes,
		// Token: 0x04000532 RID: 1330
		Terrain = 218,
		// Token: 0x04000533 RID: 1331
		LightProbeGroup = 220,
		// Token: 0x04000534 RID: 1332
		AnimatorOverrideController,
		// Token: 0x04000535 RID: 1333
		CanvasRenderer,
		// Token: 0x04000536 RID: 1334
		Canvas,
		// Token: 0x04000537 RID: 1335
		RectTransform,
		// Token: 0x04000538 RID: 1336
		CanvasGroup,
		// Token: 0x04000539 RID: 1337
		BillboardAsset,
		// Token: 0x0400053A RID: 1338
		BillboardRenderer,
		// Token: 0x0400053B RID: 1339
		SpeedTreeWindAsset,
		// Token: 0x0400053C RID: 1340
		AnchoredJoint2D,
		// Token: 0x0400053D RID: 1341
		Joint2D,
		// Token: 0x0400053E RID: 1342
		SpringJoint2D,
		// Token: 0x0400053F RID: 1343
		DistanceJoint2D,
		// Token: 0x04000540 RID: 1344
		HingeJoint2D,
		// Token: 0x04000541 RID: 1345
		SliderJoint2D,
		// Token: 0x04000542 RID: 1346
		WheelJoint2D,
		// Token: 0x04000543 RID: 1347
		ClusterInputManager,
		// Token: 0x04000544 RID: 1348
		BaseVideoTexture,
		// Token: 0x04000545 RID: 1349
		NavMeshData,
		// Token: 0x04000546 RID: 1350
		AudioMixer = 240,
		// Token: 0x04000547 RID: 1351
		AudioMixerController,
		// Token: 0x04000548 RID: 1352
		AudioMixerGroupController = 243,
		// Token: 0x04000549 RID: 1353
		AudioMixerEffectController,
		// Token: 0x0400054A RID: 1354
		AudioMixerSnapshotController,
		// Token: 0x0400054B RID: 1355
		PhysicsUpdateBehaviour2D,
		// Token: 0x0400054C RID: 1356
		ConstantForce2D,
		// Token: 0x0400054D RID: 1357
		Effector2D,
		// Token: 0x0400054E RID: 1358
		AreaEffector2D,
		// Token: 0x0400054F RID: 1359
		PointEffector2D,
		// Token: 0x04000550 RID: 1360
		PlatformEffector2D,
		// Token: 0x04000551 RID: 1361
		SurfaceEffector2D,
		// Token: 0x04000552 RID: 1362
		BuoyancyEffector2D,
		// Token: 0x04000553 RID: 1363
		RelativeJoint2D,
		// Token: 0x04000554 RID: 1364
		FixedJoint2D,
		// Token: 0x04000555 RID: 1365
		FrictionJoint2D,
		// Token: 0x04000556 RID: 1366
		TargetJoint2D,
		// Token: 0x04000557 RID: 1367
		LightProbes,
		// Token: 0x04000558 RID: 1368
		LightProbeProxyVolume,
		// Token: 0x04000559 RID: 1369
		SampleClip = 271,
		// Token: 0x0400055A RID: 1370
		AudioMixerSnapshot,
		// Token: 0x0400055B RID: 1371
		AudioMixerGroup,
		// Token: 0x0400055C RID: 1372
		NScreenBridge = 280,
		// Token: 0x0400055D RID: 1373
		AssetBundleManifest = 290,
		// Token: 0x0400055E RID: 1374
		UnityAdsManager = 292,
		// Token: 0x0400055F RID: 1375
		RuntimeInitializeOnLoadManager = 300,
		// Token: 0x04000560 RID: 1376
		CloudWebServicesManager,
		// Token: 0x04000561 RID: 1377
		UnityAnalyticsManager = 303,
		// Token: 0x04000562 RID: 1378
		CrashReportManager,
		// Token: 0x04000563 RID: 1379
		PerformanceReportingManager,
		// Token: 0x04000564 RID: 1380
		UnityConnectSettings = 310,
		// Token: 0x04000565 RID: 1381
		AvatarMask = 319,
		// Token: 0x04000566 RID: 1382
		PlayableDirector,
		// Token: 0x04000567 RID: 1383
		VideoPlayer = 328,
		// Token: 0x04000568 RID: 1384
		VideoClip,
		// Token: 0x04000569 RID: 1385
		ParticleSystemForceField,
		// Token: 0x0400056A RID: 1386
		SpriteMask,
		// Token: 0x0400056B RID: 1387
		WorldAnchor = 362,
		// Token: 0x0400056C RID: 1388
		OcclusionCullingData,
		// Token: 0x0400056D RID: 1389
		SmallestEditorClassID = 1000,
		// Token: 0x0400056E RID: 1390
		PrefabInstance,
		// Token: 0x0400056F RID: 1391
		EditorExtensionImpl,
		// Token: 0x04000570 RID: 1392
		AssetImporter,
		// Token: 0x04000571 RID: 1393
		AssetDatabaseV1,
		// Token: 0x04000572 RID: 1394
		Mesh3DSImporter,
		// Token: 0x04000573 RID: 1395
		TextureImporter,
		// Token: 0x04000574 RID: 1396
		ShaderImporter,
		// Token: 0x04000575 RID: 1397
		ComputeShaderImporter,
		// Token: 0x04000576 RID: 1398
		AudioImporter = 1020,
		// Token: 0x04000577 RID: 1399
		HierarchyState = 1026,
		// Token: 0x04000578 RID: 1400
		GUIDSerializer,
		// Token: 0x04000579 RID: 1401
		AssetMetaData,
		// Token: 0x0400057A RID: 1402
		DefaultAsset,
		// Token: 0x0400057B RID: 1403
		DefaultImporter,
		// Token: 0x0400057C RID: 1404
		TextScriptImporter,
		// Token: 0x0400057D RID: 1405
		SceneAsset,
		// Token: 0x0400057E RID: 1406
		NativeFormatImporter = 1034,
		// Token: 0x0400057F RID: 1407
		MonoImporter,
		// Token: 0x04000580 RID: 1408
		AssetServerCache = 1037,
		// Token: 0x04000581 RID: 1409
		LibraryAssetImporter,
		// Token: 0x04000582 RID: 1410
		ModelImporter = 1040,
		// Token: 0x04000583 RID: 1411
		FBXImporter,
		// Token: 0x04000584 RID: 1412
		TrueTypeFontImporter,
		// Token: 0x04000585 RID: 1413
		MovieImporter = 1044,
		// Token: 0x04000586 RID: 1414
		EditorBuildSettings,
		// Token: 0x04000587 RID: 1415
		DDSImporter,
		// Token: 0x04000588 RID: 1416
		InspectorExpandedState = 1048,
		// Token: 0x04000589 RID: 1417
		AnnotationManager,
		// Token: 0x0400058A RID: 1418
		PluginImporter,
		// Token: 0x0400058B RID: 1419
		EditorUserBuildSettings,
		// Token: 0x0400058C RID: 1420
		PVRImporter,
		// Token: 0x0400058D RID: 1421
		ASTCImporter,
		// Token: 0x0400058E RID: 1422
		KTXImporter,
		// Token: 0x0400058F RID: 1423
		IHVImageFormatImporter,
		// Token: 0x04000590 RID: 1424
		AnimatorStateTransition = 1101,
		// Token: 0x04000591 RID: 1425
		AnimatorState,
		// Token: 0x04000592 RID: 1426
		HumanTemplate = 1105,
		// Token: 0x04000593 RID: 1427
		AnimatorStateMachine = 1107,
		// Token: 0x04000594 RID: 1428
		PreviewAnimationClip,
		// Token: 0x04000595 RID: 1429
		AnimatorTransition,
		// Token: 0x04000596 RID: 1430
		SpeedTreeImporter,
		// Token: 0x04000597 RID: 1431
		AnimatorTransitionBase,
		// Token: 0x04000598 RID: 1432
		SubstanceImporter,
		// Token: 0x04000599 RID: 1433
		LightmapParameters,
		// Token: 0x0400059A RID: 1434
		LightingDataAsset = 1120,
		// Token: 0x0400059B RID: 1435
		GISRaster,
		// Token: 0x0400059C RID: 1436
		GISRasterImporter,
		// Token: 0x0400059D RID: 1437
		CadImporter,
		// Token: 0x0400059E RID: 1438
		SketchUpImporter,
		// Token: 0x0400059F RID: 1439
		BuildReport,
		// Token: 0x040005A0 RID: 1440
		PackedAssets,
		// Token: 0x040005A1 RID: 1441
		VideoClipImporter,
		// Token: 0x040005A2 RID: 1442
		ActivationLogComponent = 2000,
		// Token: 0x040005A3 RID: 1443
		MonoObject = 100003,
		// Token: 0x040005A4 RID: 1444
		Collision,
		// Token: 0x040005A5 RID: 1445
		Vector3f,
		// Token: 0x040005A6 RID: 1446
		RootMotionData,
		// Token: 0x040005A7 RID: 1447
		Collision2D,
		// Token: 0x040005A8 RID: 1448
		AudioMixerLiveUpdateFloat,
		// Token: 0x040005A9 RID: 1449
		AudioMixerLiveUpdateBool,
		// Token: 0x040005AA RID: 1450
		Polygon2D,
		// Token: 0x040005AB RID: 1451
		TilemapCollider2D = 19719996,
		// Token: 0x040005AC RID: 1452
		AssetImporterLog = 41386430,
		// Token: 0x040005AD RID: 1453
		VFXRenderer = 73398921,
		// Token: 0x040005AE RID: 1454
		SerializableManagedRefTestClass = 76251197,
		// Token: 0x040005AF RID: 1455
		Grid = 156049354,
		// Token: 0x040005B0 RID: 1456
		ScenesUsingAssets = 156483287,
		// Token: 0x040005B1 RID: 1457
		ArticulationBody = 171741748,
		// Token: 0x040005B2 RID: 1458
		Preset = 181963792,
		// Token: 0x040005B3 RID: 1459
		EmptyObject = 277625683,
		// Token: 0x040005B4 RID: 1460
		IConstraint = 285090594,
		// Token: 0x040005B5 RID: 1461
		TestObjectWithSpecialLayoutOne = 293259124,
		// Token: 0x040005B6 RID: 1462
		AssemblyDefinitionReferenceImporter = 294290339,
		// Token: 0x040005B7 RID: 1463
		SiblingDerived = 334799969,
		// Token: 0x040005B8 RID: 1464
		TestObjectWithSerializedMapStringNonAlignedStruct = 342846651,
		// Token: 0x040005B9 RID: 1465
		SubDerived = 367388927,
		// Token: 0x040005BA RID: 1466
		AssetImportInProgressProxy = 369655926,
		// Token: 0x040005BB RID: 1467
		PluginBuildInfo = 382020655,
		// Token: 0x040005BC RID: 1468
		EditorProjectAccess = 426301858,
		// Token: 0x040005BD RID: 1469
		PrefabImporter = 468431735,
		// Token: 0x040005BE RID: 1470
		TestObjectWithSerializedArray = 478637458,
		// Token: 0x040005BF RID: 1471
		TestObjectWithSerializedAnimationCurve,
		// Token: 0x040005C0 RID: 1472
		TilemapRenderer = 483693784,
		// Token: 0x040005C1 RID: 1473
		ScriptableCamera = 488575907,
		// Token: 0x040005C2 RID: 1474
		SpriteAtlasAsset = 612988286,
		// Token: 0x040005C3 RID: 1475
		SpriteAtlasDatabase = 638013454,
		// Token: 0x040005C4 RID: 1476
		AudioBuildInfo = 641289076,
		// Token: 0x040005C5 RID: 1477
		CachedSpriteAtlasRuntimeData = 644342135,
		// Token: 0x040005C6 RID: 1478
		RendererFake = 646504946,
		// Token: 0x040005C7 RID: 1479
		AssemblyDefinitionReferenceAsset = 662584278,
		// Token: 0x040005C8 RID: 1480
		BuiltAssetBundleInfoSet = 668709126,
		// Token: 0x040005C9 RID: 1481
		SpriteAtlas = 687078895,
		// Token: 0x040005CA RID: 1482
		RayTracingShaderImporter = 747330370,
		// Token: 0x040005CB RID: 1483
		RayTracingShader = 825902497,
		// Token: 0x040005CC RID: 1484
		LightingSettings = 850595691,
		// Token: 0x040005CD RID: 1485
		PlatformModuleSetup = 877146078,
		// Token: 0x040005CE RID: 1486
		VersionControlSettings = 890905787,
		// Token: 0x040005CF RID: 1487
		AimConstraint = 895512359,
		// Token: 0x040005D0 RID: 1488
		VFXManager = 937362698,
		// Token: 0x040005D1 RID: 1489
		VisualEffectSubgraph = 994735392,
		// Token: 0x040005D2 RID: 1490
		VisualEffectSubgraphOperator = 994735403,
		// Token: 0x040005D3 RID: 1491
		VisualEffectSubgraphBlock,
		// Token: 0x040005D4 RID: 1492
		LocalizationImporter = 1027052791,
		// Token: 0x040005D5 RID: 1493
		Derived = 1091556383,
		// Token: 0x040005D6 RID: 1494
		PropertyModificationsTargetTestObject = 1111377672,
		// Token: 0x040005D7 RID: 1495
		ReferencesArtifactGenerator = 1114811875,
		// Token: 0x040005D8 RID: 1496
		AssemblyDefinitionAsset = 1152215463,
		// Token: 0x040005D9 RID: 1497
		SceneVisibilityState = 1154873562,
		// Token: 0x040005DA RID: 1498
		LookAtConstraint = 1183024399,
		// Token: 0x040005DB RID: 1499
		SpriteAtlasImporter = 1210832254,
		// Token: 0x040005DC RID: 1500
		MultiArtifactTestImporter = 1223240404,
		// Token: 0x040005DD RID: 1501
		GameObjectRecorder = 1268269756,
		// Token: 0x040005DE RID: 1502
		LightingDataAssetParent = 1325145578,
		// Token: 0x040005DF RID: 1503
		PresetManager = 1386491679,
		// Token: 0x040005E0 RID: 1504
		TestObjectWithSpecialLayoutTwo = 1392443030,
		// Token: 0x040005E1 RID: 1505
		StreamingManager = 1403656975,
		// Token: 0x040005E2 RID: 1506
		LowerResBlitTexture = 1480428607,
		// Token: 0x040005E3 RID: 1507
		StreamingController = 1542919678,
		// Token: 0x040005E4 RID: 1508
		RenderPassAttachment = 1571458007,
		// Token: 0x040005E5 RID: 1509
		TestObjectVectorPairStringBool = 1628831178,
		// Token: 0x040005E6 RID: 1510
		GridLayout = 1742807556,
		// Token: 0x040005E7 RID: 1511
		AssemblyDefinitionImporter = 1766753193,
		// Token: 0x040005E8 RID: 1512
		ParentConstraint = 1773428102,
		// Token: 0x040005E9 RID: 1513
		FakeComponent = 1803986026,
		// Token: 0x040005EA RID: 1514
		PositionConstraint = 1818360608,
		// Token: 0x040005EB RID: 1515
		RotationConstraint,
		// Token: 0x040005EC RID: 1516
		ScaleConstraint,
		// Token: 0x040005ED RID: 1517
		Tilemap = 1839735485,
		// Token: 0x040005EE RID: 1518
		PackageManifest = 1896753125,
		// Token: 0x040005EF RID: 1519
		PackageManifestImporter,
		// Token: 0x040005F0 RID: 1520
		TerrainLayer = 1953259897,
		// Token: 0x040005F1 RID: 1521
		SpriteShapeRenderer = 1971053207,
		// Token: 0x040005F2 RID: 1522
		NativeObjectType = 1977754360,
		// Token: 0x040005F3 RID: 1523
		TestObjectWithSerializedMapStringBool = 1981279845,
		// Token: 0x040005F4 RID: 1524
		SerializableManagedHost = 1995898324,
		// Token: 0x040005F5 RID: 1525
		VisualEffectAsset = 2058629509,
		// Token: 0x040005F6 RID: 1526
		VisualEffectImporter,
		// Token: 0x040005F7 RID: 1527
		VisualEffectResource,
		// Token: 0x040005F8 RID: 1528
		VisualEffectObject = 2059678085,
		// Token: 0x040005F9 RID: 1529
		VisualEffect = 2083052967,
		// Token: 0x040005FA RID: 1530
		LocalizationAsset = 2083778819,
		// Token: 0x040005FB RID: 1531
		ScriptedImporter = 2089858483
        `),
    ArchiveFlags:{
        CompressionTypeMask:0x3f,
        BlocksAndDirectoryInfoCombined:0x40,
        BlocksInfoAtTheEnd:0x80,
        OldWebPluginCompatibility:0x100,
        BlockInfoNeedPaddingAtStart:0x200
    },
    CompressionType:Enum(`
        None,
        Lzma,
        Lz4,
        Lz4HC,
        Lzham
        `),

}