import React from 'react'

const caristatus = [
    queryStatusTure  {
        keterangan_aggregate(where: {Status: {_eq: true}}) {
        nodes {
            id
            id_anggota
            pelajaran
            Nilai
            Status
        }
        }
    }

    
  
  mutation InsertKeterangan {
    insert_keterangan_one(object: {id: 5, id_anggota: 3, pelajaran: "Sistem informasi", Nilai: 90, Status: true}) {
      id,
      id_anggota,
      pelajaran,
      Nilai,
      Status
      }
    }
  mutation InsertKeterangan {
    insert_keterangan_one(object: {id: 6, id_anggota: 3, pelajaran: "React", Nilai: 55, Status: false}) {
      id,
      id_anggota,
      pelajaran,
      Nilai,
      Status
      }
    }
  
  
  mutation MyMutation {
    update_keterangan_by_pk(pk_columns: {id: 2}, _set: {Status: true}) {
      id
    }
  }
  
  
  
  mutation MyMutation {
    update_keterangan_by_pk(pk_columns: {id: 6}, _set: {Status: true}) {
      id
    }
  }
  
  
const index = () => {
  return (
    <div>index</div>
  )
}

export default index