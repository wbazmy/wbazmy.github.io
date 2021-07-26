---
layout: post
title: JDK,JRE和JVM
date: 2021-07-26
tags: Java
---
# JDK,JRE和JVM
JDK：Java Development Kit        //Java开发工具包  
JRE：Java runtime environment     //Java运行环境  
JVM：Java Virtual Machine    //Java虚拟机  
## JDK
JDK是Java开发工具包，是Sun Microsystems针对Java开发员的产品。JDK中包含JRE，在JDK的安装目录下有一个名为jre的目录，里面有两个文件夹bin和lib，在这里可以认为bin里的就是jvm，lib中则是jvm工作所需要的类库，而jvm和lib和起来就称为jre。JDK是整个JAVA的核心，包括了Java运行环境JRE（Java Runtime Envirnment）、一堆Java工具（javac/java/jdb等）和Java基础的类库（即Java API 包括rt.jar）。  
1. SE(J2SE)，standard edition，标准版，是我们通常用的一个版本，从JDK 5.0开始，改名为Java SE。
2. EE(J2EE)，enterprise edition，企业版，使用这种JDK开发J2EE应用程序，从JDK 5.0开始，改名为Java EE。  
3. ME(J2ME)，micro edition，主要用于移动设备、嵌入式设备上的java应用程序，从JDK 5.0开始，改名为Java ME。  
