import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import * as UIExtension from '@foxitsoftware/foxit-pdf-sdk-for-web-library';
import { PDFViewCtrl } from '@foxitsoftware/foxit-pdf-sdk-for-web-library';
import { FoxitService } from '../agreement.service';
import { testeModel } from './teste.model';

@Component({
  selector: 'app-foxitpdfviewer',
  template: '',
  styleUrls: ['./pdfviewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PDFViewerComponent implements OnInit {

  @Output() booleanTest = new EventEmitter();
  @Output() numberTest = new EventEmitter();

  pdfui: any;
  pdfuia: any;
  events: any;
  page: number = 1;
  currentPages: number

  
  constructor( public foxitService: FoxitService ) {}

  ngOnInit() {
    //   this.pdfui = new UIExtension.PDFUI({
    //     viewerOptions: {
    //       libPath: '/foxit-lib',
    //       jr: {
    //         licenseSN: "cyewZAPLgbPcI1YWzNYwf6mXojxGuIJ+Vjc9iHs6S5divqar22kzqA==",
    //         licenseKey: "PjwcmbKxOV6sb5tUFRlu6acnUvHm15u9QZ4hHJ5oC20gtLK6FUvDFo3ugUO+sxCCZDW1TzOs8qvMK61viV7ID6O/TR3OUHpMeMgBR328VSN56YnxDmsE9065k+OLVPZZx7F7HiXgogw5MjsuzBccuK6qx7dGky2QI3rFA4/17XRRAVERLqldkxLHTB21fwpf0q45eZQIhlj81MM86oqbBkw2iStKo3DI9q++QULXrdtupGE4P0FmxDV7fexbnGz+S4+pJQjLAGi70geEdr/wg7rNPU/aEt1IZ70qxlDUGNbKQrXiEN0I2behef7JoQyecWE6bLLqetvTbgASuAoRGoiqKKqhHwd/a9DiPK+UabaDXmo8IrFZ8rMS2BlKpMLAn2wYS/5/Rlr8sQNT//Q0MM4CJE7/iHdFIbGYkzOEcvZdQrhuLDyiFAlmjOmjamFP5eiKlLCbHg1EKlYZrFAQ3qxbrW82vppBiA3u5FJs0HybX8StkQPOx3R3CLp0ZdYxepa9NoQ2KxLS6pKJ8b+2XpYlFHwLmUebUeHsbxy/bT6Bf2bynwgbcbmbd1YNevl7fxBTlE3BwevneyMrBPmAxuZDgtHFch6DAX7kqG15HEF7MF6WYvDAVtwYvxV7vF7aD3ZV4XfhVBUGqiQI0QVgOfon91ey+wMmxtRxSxOGvhGS6DLgkhJva7XoxIiLKH2n13fd1nBOKbougoJC7gQX4pgX1lUywtOUrtMy7LGis++S2KmGJepeqa53RzKZU9Ff+1ElrJPkurm5oWzgcfXUkCO4e3B2bxLY78NVrIBaY+Tnbkr5I5o3vmrldUO+8b54UWdlaF1kBDrzafGZi+4CxgFxTm2aw6lNM7W7xSp3gk3m9SI43lzC27QSImDEVQffkYCnfEr4+QBenV5/WkwIDfALVl1s3au1ecX819whdy5fcdRytPQuZ/xvBIMsom5PLkCsGKPWzZosfSevBNGzf62GnuWdyMc5kvezKCFtHJiqbQ9CLVetaX7IdlPpNqNDM38cpCwWux2tnQZDoDAzldU7rcOX19ZeP8dpB7E0ahFPMbk4m1R2v8gEbTJPF3g0y1XaOMZoOiQG7+IYi55foAigRdgjp+Uhdo/MQ5utJ++UwQRhROewqwHrTrzCq1J+zPXn51o45JQrNnVAiltMDP3zUBHLTz1bhy1YMFg66S9sqGOftdbtsa3U5Q7iqYQ+9R8WVO08YAMNePsHeeg1O2Jj5Lom9bqQ4IwYmg==",
    //       }
    //     },
    //     appearance: this.editViewer(),
    //     renderTo: '#pdf-ui',
    //     addons: UIExtension.PDFViewCtrl.DeviceInfo.isMobile ?
    //       '/foxit-lib/uix-addons/allInOne.mobile.js' :
    //       '/foxit-lib/uix-addons/allInOne.js'
    //   });
    //   this.pdfui.addViewerEventListener('render-file-success', function(totalPages: any){
    //     console.log(totalPages.pageCache.length)
    //     this.currentPages = JSON.stringify(totalPages.pageCache.length)
    //     console.log(this.currentPages)
    //     this.numberTest.emit(this.currentPages)
    // })

      // this.pdfui?.addViewerEventListener('page-number-change', function(pages: number){
      //   console.log(this.currentPages)
      //   console.log(pages)
      //   if (this.currentPages == pages) {
      //     console.log(pages)
      //     this.booleanTest.emit(true);
      //   }
      // }) 



    
    }



  editViewer() {
    
    return UIExtension.appearances.AdaptiveAppearance.extend({
      getLayoutTemplate: function(){
          return `
              <webpdf @aria:circular-focus>
                  <toolbar name="toolbar" class="fv__ui-toolbar-scrollable" @aria:role="navigation" @aria:label="aria:labels.toolbar.nav-title">
                      <div class="fv__ui-toolbar-tab-bodies" name="toolbar-tab-bodies" @retractable-body>
                          <paddle exclude-devices="tablet" name="fv--home-tab-paddle" @portfolio.unsupport @aria:toolbar>
                              <group-list name="home-toolbar-group-list">
                                  <group name="home-tab-group-io" retain-count="1" shrink-title="toolbar.more.document.title">
                                      <open-file-ribbon-dropdown></open-file-ribbon-dropdown>
                                      <zoom-ribbon-dropdown></zoom-ribbon-dropdown>    
                                      <goto-prev-page-button ></goto-prev-page-button>    
                                      <goto-page-input></goto-page-input>                          
                                      <goto-next-page-button ></goto-next-page-button>                              
                                    </group>
                              </group-list>
                          </paddle>
                          <paddle exclude-devices="tablet" name="fv--comment-tab-paddle" @portfolio.unsupport @aria:toolbar visible="false" @lazy.idle>
                              <group-list name="comment-toolbar-group-list">
                                  <group name="comment-tab-group-hand" retain-count="3">
                                      <hand-ribbon-button></hand-ribbon-button>
                                      <selection-ribbon-dropdown></selection-ribbon-dropdown>
                                      <zoom-ribbon-dropdown></zoom-ribbon-dropdown>
                                  </group>
                                  <group name="comment-tab-group-note" retain-count="3">
                                      <create-note-ribbon-button></create-note-ribbon-button>
                                      <create-attachment-ribbon-button></create-attachment-ribbon-button>
                                  </group>
                              </group-list> 
                          </paddle>
                      </div>
                  </toolbar>
                  <div class="fv__ui-body">
                    <viewer></viewer>
                  </div>  
              </webpdf>
          `;
      }
  })
  }

  defautlViewer() {
    return UIExtension.appearances.adaptive
  }

  openFile() {
    this.foxitService.downloadDocument().subscribe(
      res =>{
        this.b64toBlob(res.fileBytes)
        console.log(res.fileBytes)
      },
      err => console.log(err)
    )
  }

  b64toBlob(dataURI) {
    var byteString = atob(dataURI);
    var arrayByffer = new ArrayBuffer(byteString.length);
    var uintArray = new Uint8Array(arrayByffer);

    for (var i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    console.log(new Blob([arrayByffer]))

    const file = new File([arrayByffer], 'teste', { type: 'application/pdf' });
    console.log(file)
    this.pdfui.openPDFByFile(file);
    return 
  }
}
