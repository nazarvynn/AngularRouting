import { createAction, props } from '@ngrx/store';
import { Manifest, ManifestNode } from '../@shared/models';

export const updateManifest = createAction(
    '[AppState] update manifest',
    props<{ manifest: Manifest; manifestNode: ManifestNode }>()
);
